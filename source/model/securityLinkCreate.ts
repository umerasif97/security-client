import { Access } from "./access";
import { BaseclassCreate } from "./baseclassCreate";


export interface SecurityLinkCreate extends BaseclassCreate {
    securedId?: string;
    permissionGroupId?: string;
    operationId?: string;
    operationGroupId?: string;
    access?: Access;
    securityLinkGroupId?: string;
}