import { SecurityEntityCreate } from "./securityEntityCreate";

export interface RoleCreate extends SecurityEntityCreate {
    tenantId?: string;
}