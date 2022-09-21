#!/usr/bin/python3

import sys


def multiplyDigits(number):
    strNum = str(number)

    total = int(strNum[0])
    for i in range(1, len(strNum)):
        total = total * int(strNum[i])

    return total


def persistence(number):
    if len(str(number)) == 1:
        return 0

    multPersistance = 1
    product = multiplyDigits(number)
    while len(str(product)) != 1:
        product = multiplyDigits(product)
        multPersistance += 1

    return multPersistance


def main(argv):
    # keep this function call here
    print(persistence(int(argv[1])))


if __name__ == "__main__":
    main(sys.argv)
