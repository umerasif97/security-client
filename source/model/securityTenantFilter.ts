import { SecurityEntityFilter } from './securityEntityFilter';

export interface SecurityTenantFilter extends SecurityEntityFilter {
    userIds?: string[];
}