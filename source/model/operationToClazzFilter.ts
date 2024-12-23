import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';

export interface OperationToClazzFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}