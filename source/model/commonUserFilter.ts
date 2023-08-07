import { BasicPropertiesFilter } from '@flexicore/flexicore-client';

export interface CommonUserFilter {
    pageSize?: number;
    currentPage?: number;
    basicPropertiesFilter?: BasicPropertiesFilter;
    emails?: string[];
    phoneNumbers?: string[];
    lastNameLike?: string;
    userIds?: string[];
    userSecurityTenantsIds?: string[];
}