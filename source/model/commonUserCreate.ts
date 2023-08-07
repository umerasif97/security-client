import { SecurityUserCreate } from "./securityUserCreate";

export interface CommonUserCreate extends SecurityUserCreate {
    email?: string;
    lastName?: string;
    password?: string;
    phoneNumber?: string;
    uiConfiguration?: string;
}