import { SecurityOperation } from "./securityOperation";
import { Clazz } from "./clazz";
import { Basic } from "./basic";

export interface OperationToClazz extends Basic {
    operation?: SecurityOperation;
    clazz?: Clazz;
}