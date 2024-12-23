import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';

export interface OperationGroupFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    externalIds?: string[];
}