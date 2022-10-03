#!/usr/bin/python3

from multiprocessing import connection
import sys
import re


def QuestionMarks(str):

    re_int = re.compile("^[0-9]$")
    re_qmark = re.compile("^\\?$")
    num1 = None
    num2 = None
    qmark_cnt = 0
    result = False
    for char in str:
        if re_int.match(char) and num1 is None:
            num1 = int(char)
            continue
        if re_int.match(char) and not (num1 is None):
            num2 = int(char)
            if (num1 + num2) == 10:
                if qmark_cnt == 3:
                    result = True
                else:
                    result = False
            num1 = None
            num2 = None
            qmark_cnt = 0
            continue

        if not (num1 is None) and re_qmark.match(char):
            qmark_cnt += 1

    return result


def main(argv):
    # keep this function call here
    print(QuestionMarks(argv[1]))


if __name__ == "__main__":
    main(sys.argv)
