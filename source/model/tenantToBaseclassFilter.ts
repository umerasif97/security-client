import { SecurityLinkFilter } from './securityLinkFilter';

export interface TenantToBaseclassFilter extends SecurityLinkFilter  {
    tenantIds?: string[];
}