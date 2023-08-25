import { SecurityEntityFilter } from "./securityEntityFilter";

export interface RoleToUserFilter extends SecurityEntityFilter {
    rolesIds?: string[];
    userIds?: string[];
}