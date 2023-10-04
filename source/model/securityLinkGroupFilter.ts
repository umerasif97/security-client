import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';
import { SecurityLinkFilter } from './securityLinkFilter';

export interface SecurityLinkGroupFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    securityLinkFilter?: SecurityLinkFilter;
}