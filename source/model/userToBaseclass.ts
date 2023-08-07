import { Baseclass } from "./baseclass";
import { PermissionGroup } from "./permissionGroup";
import { Clazz } from "./clazz";
import { SecurityOperation } from "./securityOperation";
import { CommonUser } from "./commonUser";
import { SecurityEntity } from "./securityEntity";
import { SecurityLink } from "./securityLink";

export interface UserToBaseclass extends SecurityLink {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    user?: CommonUser;
    securityEntity?: SecurityEntity;
}