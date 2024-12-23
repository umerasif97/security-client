import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from "./paginationFilter";

export interface SecurityEntityFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}