import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface PermissionGroupToBaseclassFilter {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
    baseclassIds?: string[];
    permissionGroupIds?: string[];
}