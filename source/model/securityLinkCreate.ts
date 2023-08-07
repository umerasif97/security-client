import { BasicCreate } from "@flexicore/flexicore-client";
import { Access } from "./access";


export interface SecurityLinkCreate extends BasicCreate {
    baseclassId?: string;
    permissionGroupId?: string;
    clazzId?: string;
    operationId?: string;
    access?: Access;
}