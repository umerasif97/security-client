import { SecurityEntityCreate } from "./securityEntityCreate";

export interface TenantToUserCreate extends SecurityEntityCreate {
    defaultTenant?: boolean;
    tenantId?: string;
    userId?: string;
}