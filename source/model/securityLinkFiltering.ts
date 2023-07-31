import { GeneralFiltering } from "./generalFiltering";

export interface SecurityLinkFiltering extends GeneralFiltering  {
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: string[];
}