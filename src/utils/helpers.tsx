const generateRandomString = (lenght: number = 5): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result: string = "";
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

const logout = (): void => {
    const tokenAuth = localStorage.getItem("tokenAuth");
    if (tokenAuth) {
        localStorage.removeItem("tokenAuth");
    }
};

export { generateRandomString };
