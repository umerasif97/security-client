import { SecurityOperation } from "./securityOperation";
import { OperationGroup } from "./operationGroup";
import { Basic } from "./basic";

export interface OperationToGroupContainer extends Basic {
    securityOperation?: SecurityOperation;
    operationGroup?: OperationGroup;
}