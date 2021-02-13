

def print_time(i):

    if not i or not isinstance(i, int):

        return None

    hrs = i // 3600
    min = (i % 3600) // 60
    sec = i % 60

    if not hrs and not min:

        return f"00m {sec:02d}s"

    if not hrs and min:

        return f"{min:02d}m {sec:02d}s"

    if hrs:

        return f"{hrs:02d}h {min:02d}m {sec:02d}s"



def print_perc(i):

    if not i or not isinstance(i, int):

        return None

    return f"{int(100/i)}%"
