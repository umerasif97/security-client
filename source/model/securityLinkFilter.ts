import { BasicPropertiesFilter } from './basicPropertiesFilter';
import { PaginationFilter } from './paginationFilter';
import { Access } from './access';

export interface SecurityLinkFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    relevantUserIds?: string[];
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: Access[];
    securityLinkGroupIds?: string[];
}