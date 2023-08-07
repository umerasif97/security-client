import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface SecurityOperationFilter {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
}