import { Basic } from "@flexicore/flexicore-client";
import { SecurityLinkGroup } from "./securityLinkGroup";
import { SecurityLink } from "./securityLink";

export interface SecurityLinkGroupContainer extends Basic {
    securityLinkGroup?: SecurityLinkGroup;
    links?: SecurityLink[];
}