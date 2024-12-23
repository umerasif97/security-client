import { PermissionGroup } from "./permissionGroup";
import { Baseclass } from "./baseclass";

export interface PermissionGroupToBaseclass extends Baseclass {
    permissionGroup?: PermissionGroup;
    securityId?: string;
    securedId?: string;
    securedType?: string;
}