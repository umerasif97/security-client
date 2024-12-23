import { Access } from "./access";

export interface SecurityOperation {
    id?: string;
    name?: string;
    description?: string;
    defaultAccess?: Access;
    category?: string;
}