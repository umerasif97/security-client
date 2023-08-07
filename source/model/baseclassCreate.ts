import { BasicCreate } from "@flexicore/flexicore-client";

export interface BaseclassCreate extends BasicCreate {
    tenantId?: string;
    systemObject?: boolean;
}