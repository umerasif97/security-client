import { SecurityUser } from "./securityUser";
import { SecurityTenant } from "./securityTenant";
import { Basic } from "./basic";

export interface Baseclass extends Basic {
    creator?: SecurityUser;
    tenant?: SecurityTenant;
    securityId?: string;
}