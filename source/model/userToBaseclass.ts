import { Basic } from "@flexicore/flexicore-client";
import { Baseclass } from "./baseclass";
import { PermissionGroup } from "./permissionGroup";
import { Clazz } from "./clazz";
import { SecurityOperation } from "./securityOperation";
import { CommonUser } from "./commonUser";
import { SecurityEntity } from "./securityEntity";

export interface UserToBaseclass extends Basic {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    user?: CommonUser;
    securityEntity?: SecurityEntity;
}