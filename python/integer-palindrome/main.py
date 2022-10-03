#!/usr/bin/python3

import sys


def reverse_int(num):
    n = num
    rev = 0

    while n > 0:
        a = n % 10
        rev = rev * 10 + a
        n = n // 10

    return rev


def palindrome_chk(num):
    rev = reverse_int(num)

    if num == rev:
        return True
    else:
        return False


def main(argv):
    # keep this function call here
    print(palindrome_chk(int(argv[1])))


if __name__ == "__main__":
    main(sys.argv)
