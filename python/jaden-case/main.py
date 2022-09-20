def to_jaden_case(string):
    words = string.split(" ")
    newWords = []

    for word in words:
        newWords.append(word.capitalize())

    newString = " ".join(word for word in newWords)

    return newString
