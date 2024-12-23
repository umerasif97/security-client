import { BasicCreate } from "./basicCreate";

export interface BaseclassCreate extends BasicCreate {
    tenantId?: string;
    securityId?: string;
}