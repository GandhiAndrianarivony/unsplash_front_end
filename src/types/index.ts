import { ReactElement } from "react";

export type ChildrenType = {
    children?: ReactElement | ReactElement[];
};

export type UserType = {
    username: string;
    email: string;
};
