#!/usr/bin/python3

import sys
import re


def UsernameValidation(strParam):

    if len(strParam) < 4 or len(strParam) > 25:
        return False

    if not strParam[0].isalpha():
        return False

    if strParam[-1] == "_":
        return False

    if re.search(r"[^\w-]", strParam):
        return False

    return True


def main(argv):
    # keep this function call here
    print(UsernameValidation(argv[1]))


if __name__ == "__main__":
    main(sys.argv)
