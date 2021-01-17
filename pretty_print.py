

def print_time(i):

    if not i or not isinstance(i, int):

        return None

    hrs = i // 3600
    min = (i % 3600) // 60
    sec = i % 60

    if not hrs and not min:

        return f"{sec:02d} (sec)"

    if not hrs and min:

        return f"{min:02d}::{sec:02d}"

    if hrs:

        return f"{hrs:02d}:{min:02d}::{sec:02d}"



def print_perc(i):

    if not i or not isinstance(i, int):

        return None

    return f"{int(100/i)}%"
