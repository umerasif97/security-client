import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';

export interface ClazzFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}