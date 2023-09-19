import { Basic } from "@flexicore/flexicore-client";
import { SecurityOperation } from "./securityOperation";
import { OperationGroup } from "./operationGroup";

export interface OperationToGroup extends Basic {
    operation?: SecurityOperation;
    operationGroup?: OperationGroup;
}