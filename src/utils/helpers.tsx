const generateRandomString = (lenght: number = 5): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result: string = "";
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

const convertToDate = (date_string: string): number => {
    const [datePart, millisecondsPart] = date_string.split(".");
    const date = new Date(datePart);

    const milliseconds = parseInt(millisecondsPart);
    return date.setMilliseconds(milliseconds);
};

export { generateRandomString, convertToDate };
