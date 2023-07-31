import { Basic } from '@flexicore/flexicore-client';
import { Baseclass } from './baseclass';
import { PermissionGroup } from './permissionGroup';
import { Clazz } from './clazz';
import { SecurityOperation } from './securityOperation';
import { Role } from './role';
import { SecurityEntity } from './securityEntity';

export interface RoleToBaseclass extends Basic {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    role?: Role;
    securityEntity?: SecurityEntity;
}