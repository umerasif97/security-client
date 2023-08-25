import { SecurityEntity } from './securityEntity';
import { SecurityTenant } from './securityTenant';

export interface Role extends SecurityEntity {
    tenant?: SecurityTenant;
}