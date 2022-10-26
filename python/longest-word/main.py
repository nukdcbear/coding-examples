#!/usr/bin/python3

import sys
import re


def longestword(str):
    words = str.split()
    longest = 0
    longestword = ""
    for word in words:
        word = re.sub(r"[^\w\s]", "", word)
        if len(word) > longest:
            longest = len(word)
            longestword = word
    return longestword


def main(argv):
    # keep this function call here
    print(longestword(argv[1]))


if __name__ == "__main__":
    main(sys.argv)
