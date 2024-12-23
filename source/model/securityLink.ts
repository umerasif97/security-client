import { PermissionGroup } from "./permissionGroup";
import { Baseclass } from "./baseclass";
import { Access } from "./access";
import { SecurityLinkGroup } from "./securityLinkGroup";
import { OperationGroup } from "./operationGroup";

export interface SecurityLink extends Baseclass {
    permissionGroup?: PermissionGroup;
    access?: Access;
    operationGroup?: OperationGroup;
    securityLinkGroup?: SecurityLinkGroup;
    securityId?: String;
    securedId?: String;
    securedType?: String;
    operationId?: String;
}