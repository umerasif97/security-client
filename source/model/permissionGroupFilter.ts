import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';

export interface PermissionGroupFilter extends PaginationFilter {
        basicPropertiesFilter?: BasicPropertiesFilter;
        externalIds?: string[];
}