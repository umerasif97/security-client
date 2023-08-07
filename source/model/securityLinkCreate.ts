import { BasicCreate } from "@flexicore/flexicore-client";
import { Access } from "./ioperations";


export interface SecurityLinkCreate extends BasicCreate {
    baseclassId?: string;
    permissionGroupId?: string;
    clazzId?: string;
    operationId?: string;
    access?: Access;
}