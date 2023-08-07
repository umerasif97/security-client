import { SecurityEntityFilter } from "./securityEntityFilter";

export interface RoleFilter extends SecurityEntityFilter {
    tenantIds?: string[];
}