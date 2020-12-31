import sqlite3, json, hashlib, time
from datetime import datetime

"""
(data) as an argument should take the form:
packet::bytearray([0x00,0x01,...,0xFF])
timestamp::datetime.now() #Convert with datetime.fromtimestamp(timestamp)
"""
TEAM_MAP = """REPLACE( REPLACE( REPLACE( REPLACE( REPLACE(team,
              1,'RED'),
              2,'BLUE'),
              3,'YELLOW'),
              4,'GREEN'),
              5,'PURPLE')
              AS team
           """
def create_connection(db):
    return sqlite3.connect(db)

def init_data_table(conn):
    """
    Initialize standard table.
    """
    sql_arg = """CREATE TABLE IF NOT EXISTS data (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 sender TEXT NOT NULL,
                 destination TEXT NOT NULL,
                 command TEXT NOT NULL,
                 payload TEXT NOT NULL,
                 timestamp DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) );
              """
    conn.cursor().execute(sql_arg)
    conn.commit()

def init_team_table(conn):
    """
    Initialize team table
    """
    sql_arg = """CREATE TABLE IF NOT EXISTS team (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 uid TEXT NOT NULL,
                 team INTEGER NOT NULL,
                 timestamp DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) );
              """
    conn.cursor().execute(sql_arg)
    conn.commit()

def init_medic_table(conn):
    """
    Initialize medic table
    """
    sql_arg = """CREATE TABLE IF NOT EXISTS medic (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 uid TEXT NOT NULL,
                 alive INTEGER NOT NULL,
                 timestamp DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) );
              """
    conn.cursor().execute(sql_arg)
    conn.commit()

def init_score_table(conn):
    """
    Initialize score table
    """
    sql_arg = """CREATE TABLE IF NOT EXISTS score (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 tag TEXT,
                 team INTEGER NOT NULL,
                 action TEXT,
                 points INTEGER,
                 time_held INTEGER,
                 timestamp DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) );
              """
    conn.cursor().execute(sql_arg)
    conn.commit()

def init_capture_status_table(conn):
    """
    Initialize node status table
    """
    sql_arg = """CREATE TABLE IF NOT EXISTS capture_status (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 node INTEGER NOT NULL,
                 tag TEXT NOT NULL,
                 team INTEGER NOT NULL,
                 stable INTEGER NOT NULL,
                 timestamp DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')) );
              """
    conn.cursor().execute(sql_arg)
    conn.commit()

def init_player_table(conn):

    sql_arg = """CREATE TABLE IF NOT EXISTS player (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 fname TEXT NOT NULL,
                 lname TEXT NOT NULL,
                 uid TEXT
                 timestamp DEFAULT CURRENT_TIMESTAMP);
              """

    conn.cursor().execute(sql_arg)
    conn.commit()

def init_player_table(conn):

    sql_arg = """CREATE TABLE IF NOT EXISTS player (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 fname TEXT NOT NULL,
                 lname TEXT NOT NULL,
                 callsign TEXT,
                 outfit TEXT,
                 uid TEXT UNIQUE,
                 timestamp DEFAULT CURRENT_TIMESTAMP,
                 UNIQUE(fname, lname));
              """

    conn.cursor().execute(sql_arg)
    conn.commit()

def init_player_table(conn):

    sql_arg = """CREATE TABLE IF NOT EXISTS player (
                 id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                 fname TEXT NOT NULL,
                 lname TEXT NOT NULL,
                 callsign TEXT,
                 outfit TEXT,
                 uid TEXT UNIQUE,
                 timestamp DEFAULT CURRENT_TIMESTAMP,
                 UNIQUE(fname, lname));
              """

    conn.cursor().execute(sql_arg)
    conn.commit()

def init_tables(conn):

    init_data_table(conn)
    init_medic_table(conn)
    init_team_table(conn)
    init_score_table(conn)
    init_capture_status_table(conn)
    init_player_table(conn)

def add_row(conn, table, data):
    """
    Add row of data to standard table.
    """
    sql_arg = f"INSERT INTO {table} ";
    sql_arg += "(" + ','.join([k for k in data]) + ") "
    sql_arg += "VALUES (" + ",".join(["?" for k in data]) + ")"

    conn.cursor().execute(sql_arg,[data[k] for k in data])
    conn.commit()

def edit_row(conn, table, data):
    """
    Edit row of data to standard table.
    """
    id = data.pop('id')
    keys, vals = [], []
    for k in data:
        keys.append(k)
        vals.append(data[k])
    vals.append(id)

    sql_arg = f"UPDATE {table} SET ";
    sql_arg += ','.join(['%s=?' % k for k in keys])
    sql_arg += " WHERE id=(?)"

    conn.cursor().execute(sql_arg, vals)
    conn.commit()

def get_row(conn, table, id):
    """
    Return row contents for standard table.
    """
    sql_arg = f"SELECT * FROM {table} WHERE id=(?)"

    cur = conn.cursor().execute(sql_arg, (id,))
    dat = cur.fetchall()

    return dat.pop(0)

def get_col_names(conn, table):
    """
    Return column names from standard table.
    """
    sql_arg = f"SELECT * FROM {table}"

    cur = conn.cursor().execute(sql_arg)
    col = [c[0] for c in cur.description]

    return col

def get_table_names(conn):
    """
    Return table names.
    """
    sql_arg = "SELECT name FROM sqlite_master WHERE type='table';"
    cur = conn.cursor()
    cur.execute(sql_arg)

    return cur.fetchall()[1:]

def _get_table(conn, table):
    """
    Return standard table contents.
    """
    sql_arg = f"SELECT * FROM {table} ORDER BY timestamp DESC"

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg).fetchall()

    return [dict(i) for i in data]

def save_to_JSON(conn, table):

    data = _get_table(conn, table)
    with open("db.json", 'w') as f:
        json.dump(data, f, indent=4)

def del_row(conn, table, id):
    """
    Delete row contents for standard table.
    """
    sql_arg = f"DELETE FROM {table} WHERE id=(?)"

    conn.cursor().execute(sql_arg, [id])
    conn.commit()

def _get_is_alive(conn, uid):

    sql_arg = """SELECT * FROM medic
                 WHERE uid=(?)
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """

    cur = conn.cursor()
    cur.execute(sql_arg, (uid,))

    return cur.fetchone()

def _get_team(conn, uid):

    sql_arg = """SELECT team FROM team
                 WHERE uid=(?)
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """

    cur = conn.cursor()
    cur.execute(sql_arg, (uid,))

    return cur.fetchone()

def _get_team_members(conn, team):

    sql_arg = """SELECT uid AS player, team, max_ts
                 FROM
                    (SELECT id, uid, team, MAX(timestamp) AS max_ts
                     FROM team
                     GROUP BY uid)
                 WHERE team=(?)
                 GROUP BY uid
              """
    #sql_arg = """SELECT fname, lname, team, max_ts
    #             FROM (SELECT player.fname AS fname,
    #                   player.lname AS lname,
    #                   team.team AS team, MAX(team.timestamp) AS max_ts
    #                   FROM player
    #                   INNER JOIN team ON player.uid=team.uid
    #                   GROUP BY player.fname)
    #             WHERE team=(?)
    #          """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg, (team,)).fetchall()

    return [dict(i) for i in data]

def _get_player_names(conn):
    sql_arg = """SELECT * FROM player
                 ORDER BY lname ASC
              """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg).fetchall()

    return [dict(i) for i in data]

def _get_registered_teams(conn):

    sql_arg = """SELECT DISTINCT team
                 FROM
                     (SELECT id, uid, team, MAX(timestamp) AS max_ts
                      FROM team
     	              GROUP BY uid)
                 ORDER BY team ASC
              """

    return conn.cursor().execute(sql_arg).fetchall()

def _score_by_uid(conn):

    sql_arg = """SELECT tag as player, team, SUM(points) as points
                 FROM score WHERE date(timestamp) = date('now', 'localtime') AND tag IS NOT NULL
                 GROUP BY tag
                 ORDER BY SUM(points) DESC;
              """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg).fetchall()

    return [dict(i) for i in data]

def _score_by_team(conn):

    sql_arg = f"""SELECT {TEAM_MAP}, SUM(points) as points
                  FROM score WHERE date(timestamp) = date('now', 'localtime')
                  GROUP BY team
                  ORDER BY SUM(points) DESC;
               """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg).fetchall()

    return [dict(i) for i in data]

def _get_time_held_by_team(conn):

    sql_arg = f"""SELECT {TEAM_MAP}, SUM(time_held) as time
                  FROM score WHERE date(timestamp) = date('now', 'localtime')
                  GROUP BY team
                  ORDER BY SUM(time_held) DESC;
               """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg).fetchall()

    return [dict(i) for i in data]


def _get_times_for_node(conn, node):

    sql_arg = f"""SELECT {TEAM_MAP}, sum(time_held) AS time, action
                  FROM score
                  WHERE date(timestamp) = date('now', 'localtime') AND action = (?)
		          AND EXISTS(
						     SELECT node
                             FROM capture_status
                             WHERE node = action
							 )
                  GROUP BY team
                  ORDER BY time DESC
               """

    conn.row_factory = sqlite3.Row
    data = conn.cursor().execute(sql_arg, (node,)).fetchall()

    return [dict(i) for i in data]


def _get_last_captor(conn):

    sql_arg = """SELECT tag,team FROM score
                 WHERE date(timestamp) = date('now', 'localtime') AND action = 'CAPTURE'
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """
    cur = conn.cursor()
    cur.execute(sql_arg)

    return cur.fetchone()


def _get_time_capture_complete(conn):

    sql_arg = """SELECT timestamp FROM score
                 WHERE date(timestamp) = date('now', 'localtime') AND action = 'CAPTURE COMPLETE'
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """
    cur = conn.cursor()
    cur.execute(sql_arg)

    return cur.fetchone()


def _get_owning(conn):

    sql_arg = """SELECT tag,team,timestamp FROM capture_status
                 WHERE date(timestamp) = date('now', 'localtime')
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """

    cur = conn.cursor()
    cur.execute(sql_arg)

    return cur.fetchone()


def _get_capture_status(conn, node):

    sql_arg = """SELECT tag,team,stable,timestamp FROM capture_status
                 WHERE date(timestamp) = date('now', 'localtime') AND node = (?)
                 ORDER BY timestamp DESC, id DESC LIMIT 1;
              """

    cur = conn.cursor()
    cur.execute(sql_arg, (node,))

    return cur.fetchone()

if __name__ == "__main__":

    conn = create_connection('ballahack.sqlite')

    init_data_table(conn)

    data = {'packet':bytearray(10).hex(' '), # convert back with bytes.fromhex(bytes)
            'timestamp':datetime.now()}

    add_row(conn, 'data', data)

    print(get_table_names(conn))

    conn.close()
