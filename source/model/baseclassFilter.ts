import { BasicPropertiesFilter } from "@flexicore/flexicore-client";
import { PaginationFilter } from "./paginationFilter";

export interface BaseclassFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    clazzIds?: string[];
}