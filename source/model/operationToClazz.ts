import { Basic } from "@flexicore/flexicore-client";
import { SecurityOperation } from "./securityOperation";
import { Clazz } from "./clazz";

export interface OperationToClazz extends Basic {
    securityOperation?: SecurityOperation;
    clazz?: Clazz;
}