import { ReactElement, ReactNode } from "react";

export interface ChildrenInterface {
    children: ReactElement | ReactElement[] | JSX.Element | JSX.Element[] | string | string[]
}