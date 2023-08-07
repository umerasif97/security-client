import { SecurityLinkCreate } from "./securityLinkCreate";

export interface UserToBaseclassCreate extends SecurityLinkCreate {
    userId?: string;
    tenantId?: string;
}