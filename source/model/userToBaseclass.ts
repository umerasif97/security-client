import { SecurityLink } from "./securityLink";
import { SecurityUser } from "./securityUser";

export interface UserToBaseclass extends SecurityLink {
    user?: SecurityUser;
}