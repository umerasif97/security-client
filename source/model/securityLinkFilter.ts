import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface SecurityLinkFilter  {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: string[];
}