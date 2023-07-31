import { Basic } from "@flexicore/flexicore-client";
import { SecurityUser } from "./securityUser";
import { SecurityTenant } from "./securityTenant";
import { Clazz } from "./clazz";

export interface Baseclass extends Basic {
    dtype?: string;
    creator?: SecurityUser;
    tenant?: SecurityTenant;
    systemObject?: boolean;
    clazz?: Clazz;
    noSQL?: boolean;
}