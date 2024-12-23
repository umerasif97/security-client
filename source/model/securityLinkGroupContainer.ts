import { SecurityLinkGroup } from "./securityLinkGroup";
import { SecurityLink } from "./securityLink";
import { Basic } from "./basic";

export interface SecurityLinkGroupContainer extends Basic {
    securityLinkGroup?: SecurityLinkGroup;
    links?: SecurityLink[];
}