import { BasicCreate } from "./basicCreate";

export interface OperationToGroupCreate extends BasicCreate {
    operationId?: string;
    operationGroupId?: string;
}