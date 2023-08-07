import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface PermissionGroupFilter extends PaginationFilter {
        basicPropertiesFilter?: BasicPropertiesFilter;
        externalIds?: string[];
}