#!/usr/bin/python3

import sys


def FindIntersection(strArr):

    matches = ""
    for num1 in strArr[0].split(","):
        for num2 in strArr[1].split(","):
            if num1 == num2:
                matches += num1

    return matches


# print(FindIntersection(input()))
def main(argv):
    print(FindIntersection([argv[1], argv[2]]))


if __name__ == "__main__":
    main(sys.argv)
