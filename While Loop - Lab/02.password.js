function password(input) {
    let index = 0;

    let userName = input[index];
    index++;

    let password = input[index];
    index++;

    let currentPassword = input[index];
    index++;

    while (password !== currentPassword) {

        currentPassword = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}

password(["Gosho", "secret", "secret"]);