import { BasicPropertiesFilter } from "./basicPropertiesFilter";
import { Clazz } from "./clazz";
import { PaginationFilter } from "./paginationFilter";

export interface BaseclassFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    clazzes?: Clazz[];
}