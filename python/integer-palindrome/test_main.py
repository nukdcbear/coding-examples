import pytest
import main


def test_reverse_int():
    assert main.reverse_int(123) == 321


def test_palindrome_chk():
    assert main.palindrome_chk(121) == True


def test_not_palindrome_chk():
    assert main.palindrome_chk(123) == False
