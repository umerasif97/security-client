import { Basic } from "@flexicore/flexicore-client";
import { PermissionGroup } from "./permissionGroup";
import { Baseclass } from "./baseclass";

export interface PermissionGroupToBaseclass extends Basic {
    permissionGroup?: PermissionGroup;
    baseclass?: Baseclass;
}