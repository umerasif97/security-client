import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { PaginationFilter } from "./paginationFilter";

export interface BaseclassFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    clazzIds?: string[];
}