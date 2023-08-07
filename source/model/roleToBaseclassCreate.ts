import { SecurityLinkCreate } from "./securityLinkCreate";

export interface RoleToBaseclassCreate extends SecurityLinkCreate {
    roleId?: string;
    tenantId?: string;
}