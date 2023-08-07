import { SecurityLinkCreate } from "./securityLinkCreate";

export interface TenantToBaseclassCreate extends SecurityLinkCreate {
    tenantId?: string;
}