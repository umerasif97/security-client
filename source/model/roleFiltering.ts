import { BasicPropertiesFilter } from "@flexicore/flexicore-client";

export interface RoleFiltering {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
    tenantIds?: string[];
}