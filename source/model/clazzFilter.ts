import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface ClazzFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}