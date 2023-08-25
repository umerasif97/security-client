import { SecurityEntity } from './securityEntity';
import { SecurityTenant } from './securityTenant';
import { SecurityUser } from './securityUser';

export interface TenantToUser extends SecurityEntity {
    defaultTenant?: boolean;
    tenant?: SecurityTenant;
    user?: SecurityUser;
}