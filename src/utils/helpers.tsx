import { jwtDecode } from "jwt-decode";

type DecodedJWTType = {
    payload: string;
};
const getRandomChoice = (data: any[]): any => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
};

const generateRandomString = (lenght: number = 5): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result: string = "";
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
};

const capitalizeFirstLetter = (letter: string): string => {
    return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
};

const convertToDate = (date_string: string): number => {
    // Convert datetime string to data milliseconds
    const [datePart, millisecondsPart] = date_string.split(".");
    const date = new Date(datePart);

    const milliseconds = parseInt(millisecondsPart);
    return date.setMilliseconds(milliseconds);
};

const isAuthTokenExpired = (authToken: string | null): boolean => {
    if (!authToken) {
        return true;
    }
    const decodedJWTToken = jwtDecode<DecodedJWTType>(authToken);

    // Convert expired date to milliseconds
    const expiredAt = convertToDate(JSON.parse(decodedJWTToken.payload).exp);

    // get current date in milliseconds
    const currentDate = new Date().getTime();

    // Check if Authentication token has expired
    if (expiredAt - currentDate <= 0) {
        return true;
    }
    return false;
};

export {
    generateRandomString,
    convertToDate,
    isAuthTokenExpired,
    capitalizeFirstLetter,
    getRandomChoice,
};
