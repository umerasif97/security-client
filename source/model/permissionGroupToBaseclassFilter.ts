import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';
import { PermissionGroupToBaseclassSorting } from './permissionGroupToBaseclassSorting';

export interface PermissionGroupToBaseclassFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    baseclassIds?: string[];
    clazzIds?: string[];
    permissionGroupIds?: string[];
    sorting?: PermissionGroupToBaseclassSorting;
}