import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';

export interface OperationToClazzFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}