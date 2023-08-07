import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface SecurityOperationFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}