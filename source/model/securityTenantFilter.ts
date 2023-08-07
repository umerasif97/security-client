import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface SecurityTenantFilter {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
}