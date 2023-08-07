import { SecurityLinkFilter } from './securityLinkFilter';

export interface RoleToBaseclassFilter extends SecurityLinkFilter {
    roleIds?: string[];
}