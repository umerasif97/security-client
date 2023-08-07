import { Role } from './role';
import { SecurityLink } from './securityLink';

export interface RoleToBaseclass extends SecurityLink {
    role?: Role;
}