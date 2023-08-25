import { Role } from './role';
import { SecurityEntity } from './securityEntity';
import { SecurityUser } from './securityUser';

export interface RoleToUser extends SecurityEntity {
    role?: Role;
    user?: SecurityUser;
}