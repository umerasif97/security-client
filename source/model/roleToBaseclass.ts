import { Baseclass } from './baseclass';
import { PermissionGroup } from './permissionGroup';
import { Clazz } from './clazz';
import { SecurityOperation } from './securityOperation';
import { Role } from './role';
import { SecurityEntity } from './securityEntity';
import { SecurityLink } from './securityLink';

export interface RoleToBaseclass extends SecurityLink {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    role?: Role;
    securityEntity?: SecurityEntity;
}