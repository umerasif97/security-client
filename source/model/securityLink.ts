import { Basic } from "@flexicore/flexicore-client";
import { PermissionGroup } from "./permissionGroup";
import { Clazz } from "./clazz";
import { SecurityOperation } from "./securityOperation";
import { Baseclass } from "./baseclass";
import { SecurityEntity } from "./securityEntity";

export interface SecurityLink extends Basic {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    securityEntity?: SecurityEntity;
}