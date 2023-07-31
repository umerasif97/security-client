import { BasicPropertiesFilter } from "@flexicore/flexicore-client";

export interface GeneralFiltering {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
}