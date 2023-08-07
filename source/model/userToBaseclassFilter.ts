import { SecurityLinkFilter } from './securityLinkFilter';

export interface UserToBaseclassFilter extends SecurityLinkFilter {
    userIds?: string[];
}