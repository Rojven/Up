import { ReactNode } from "react";

export interface IMenuItem {
    name: string;
    path: string;
    icon: ReactNode;
    id: number;
}

export interface IAddonsTableContentItem {
    id: number;
    title: string;
    imgUrl: string;
}