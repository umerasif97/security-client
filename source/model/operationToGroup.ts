import { SecurityOperation } from "./securityOperation";
import { OperationGroup } from "./operationGroup";
import { Basic } from "./basic";

export interface OperationToGroup extends Basic {
    operation?: SecurityOperation;
    operationGroup?: OperationGroup;
}