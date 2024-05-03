import { jwtDecode } from "jwt-decode";

type DecodedJWTType = {
    payload: string;
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

const convertToDate = (date_string: string): number => {
    const [datePart, millisecondsPart] = date_string.split(".");
    const date = new Date(datePart);

    const milliseconds = parseInt(millisecondsPart);
    return date.setMilliseconds(milliseconds);
};

const isAuthTokenExpired = (authToken: string): boolean => {
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

export { generateRandomString, convertToDate, isAuthTokenExpired };
