import { SecurityEntityCreate } from "./securityEntityCreate";

export interface RoleToUserCreate extends SecurityEntityCreate {
    roleId?: string;
    securityUserId?: string;
}