import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface ClazzFilter {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
}