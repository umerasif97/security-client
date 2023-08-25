import { SecurityEntityFilter } from "./securityEntityFilter";

export interface TenantToUserFilter extends SecurityEntityFilter {
    tenantsIds?: string[];
    userIds?: string[];
}