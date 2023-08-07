import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { SecurityUserFilter } from './securityUserFilter';

export interface CommonUserFilter extends SecurityUserFilter {
    emails?: string[];
    phoneNumbers?: string[];
    lastNameLike?: string;
    userIds?: string[];
    userSecurityTenantsIds?: string[];
}