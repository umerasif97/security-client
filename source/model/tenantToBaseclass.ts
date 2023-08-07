import { SecurityLink } from './securityLink';
import { SecurityTenant } from './securityTenant';

export interface TenantToBaseclass extends SecurityLink {
    tenant?: SecurityTenant;
}