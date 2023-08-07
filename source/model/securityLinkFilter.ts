import { BasicPropertiesFilter } from '@flexicore/flexicore-client';
import { PaginationFilter } from './paginationFilter';
import { Access } from './access';

export interface SecurityLinkFilter extends PaginationFilter {
    basicPropertiesFilter?: BasicPropertiesFilter;
    baseclassIds?: string[];
    operationIds?: string[];
    accesses?: Access[];
}