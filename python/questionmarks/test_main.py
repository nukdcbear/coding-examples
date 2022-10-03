import pytest
import main


def test_QuestionMarks_exist():
    assert main.QuestionMarks("abc6???4") == True


def test_QuestionMarks_exist_big():
    assert main.QuestionMarks("abd2???8zxye5??djjr?5") == True


def test_QuestionMarks_donot_exist():
    assert main.QuestionMarks("abcd5???5djf2?8") == False


def test_QuestionMarks_exist_extranumber():
    assert main.QuestionMarks("abcd3???7sdjpo4??5") == True
