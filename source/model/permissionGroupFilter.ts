import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface PermissionGroupFilter {
        pageSize?: number;
        currentPage?: number;
        basicPropertiesFilter?: BasicPropertiesFilter;
        externalIds?: string[];
}