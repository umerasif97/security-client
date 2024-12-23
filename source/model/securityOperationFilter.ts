import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';

export interface SecurityOperationFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    categories?: string[];
    operationGroupIds?: string[];
    categoryLike?: string;
}