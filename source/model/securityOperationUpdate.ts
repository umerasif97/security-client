import { SecurityOperationCreate } from "./securityOperationCreate";

export interface SecurityOperationUpdate extends SecurityOperationCreate {
    id?: string;
}