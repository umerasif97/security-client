import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface SecurityUserFilter {
        pageSize?: number;
        currentPage?: number;
        basicPropertiesFilter?: BasicPropertiesFilter;
}