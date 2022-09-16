function UsernameValidation(username: string): boolean {

    if (username.length < 4 || username.length > 25) {
        return false;
    }

    if (!(/[a-zA-Z]/).test(username.charAt(0))) {
        return false;
    }

    if (username.charAt(username.length - 1) === "_") {
        return false;
    }

    if (/\W+/.test(username)) {
        return false;
    }

    return true
}

console.log(UsernameValidation(process.argv[2]))