import { CommonUserCreate } from "./commonUserCreate";

export interface CommonUserUpdate extends CommonUserCreate {
    id?: string;
}