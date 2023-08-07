import { SecurityEntityCreate } from "./securityEntityCreate";

export interface SecurityUserCreate extends SecurityEntityCreate {
    tenantId?: string;
}