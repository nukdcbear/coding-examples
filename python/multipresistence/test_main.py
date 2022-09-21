import pytest
import main


def test_multiplydigits():
    assert main.multiplyDigits(123) == 6


def test_persistence_single_digit():
    assert main.persistence(5) == 0


def test_persistence():
    assert main.persistence(123) == 1
