import { GeneralFiltering } from './generalFiltering';

export interface TenantToBaseclassFiltering extends GeneralFiltering {
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: string[];
    tenantIds?: string[];
}