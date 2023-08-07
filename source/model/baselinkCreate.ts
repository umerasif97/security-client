import { SecurityEntityCreate } from "./securityEntityCreate";

export interface BaselinkCreate extends SecurityEntityCreate {
    name?: string;
    description?: string;
    leftsideId?: string;
    rightsideId?: string;
    valueId?: string;
    simpleValue?: string;
    linkClassName?: string;
}