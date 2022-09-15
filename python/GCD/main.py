#!/usr/bin/python3

import array as arr


def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, (a % b))


numbers = arr.array("i", [42, 56, 14])

gcdResult = numbers[0]
for i in range(len(numbers) - 1):
    gcdResult = gcd(gcdResult, numbers[i])

print(gcdResult)
