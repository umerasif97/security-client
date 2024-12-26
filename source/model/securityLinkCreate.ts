import { Access } from "./access";
import { BaseclassCreate } from "./baseclassCreate";
import { Clazz } from "./clazz";


export interface SecurityLinkCreate extends BaseclassCreate {
    securedId?: string;
    permissionGroupId?: string;
    operationId?: string;
    operationGroupId?: string;
    access?: Access;
    securityLinkGroupId?: string;
    clazz?: Clazz;
}