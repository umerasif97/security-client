import { Basic } from "@flexicore/flexicore-client";
import { PermissionGroup } from "./permissionGroup";
import { Clazz } from "./clazz";
import { SecurityOperation } from "./securityOperation";
import { Baseclass } from "./baseclass";
import { SecurityEntity } from "./securityEntity";
import { Access } from "./access";
import { SecurityLinkGroup } from "./securityLinkGroup";
import { OperationGroup } from "./operationGroup";

export interface SecurityLink extends Basic {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: Access;
    securityEntity?: SecurityEntity;
    operationGroup?: OperationGroup;
    securityLinkGroup?: SecurityLinkGroup;
}