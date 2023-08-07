import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from "./paginationFilter";

export interface SecurityEntityFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
}