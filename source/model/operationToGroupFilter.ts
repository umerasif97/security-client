import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface OperationToGroupFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    operationIds?: string[];
    operationGroupIds?: string[];
}