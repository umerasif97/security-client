import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface OperationGroupFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    externalIds?: string[];
}