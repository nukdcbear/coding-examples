import pytest
import main


def test_to_jaden_case():
    assert (
        main.to_jaden_case("How can mirrors be real if our eyes aren't real")
        == "How Can Mirrors Be Real If Our Eyes Aren't Real"
    )
