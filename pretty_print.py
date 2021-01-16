

def print_time(i):

    if not i or not isinstance(i, int):

        return i

    if i <= 12:

        return f"{i*10} (sec)"

    if 12 < i < 60 and not (i*10/60 % 0.5):

        return f"{i*10/60} (min)"

    if 60 <= i <= 90 and not (i*10/60 % 1):

        return f"{int(i*10/60)} (min)"

    if i > 90 and not (i*10/60 % 5):

        return f"{int(i*10/60)} (min)"


def print_perc(i):

    if not i or not isinstance(i, int):

        return i

    return f"{int(100/i)}%"
