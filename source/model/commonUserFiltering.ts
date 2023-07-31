import { GeneralFiltering } from "./generalFiltering";

export interface CommonUserFiltering extends GeneralFiltering {
    emails?: string[];
    phoneNumbers?: string[];
    lastNameLike?: string;
    userIds?: string[];
    userSecurityTenantsIds?: string[];
}