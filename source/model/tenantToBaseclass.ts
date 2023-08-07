import { Baseclass } from './baseclass';
import { PermissionGroup } from './permissionGroup';
import { Clazz } from './clazz';
import { SecurityOperation } from './securityOperation';
import { Tenant } from './tenant';
import { SecurityEntity } from './securityEntity';
import { SecurityLink } from './securityLink';

export interface TenantToBaseclass extends SecurityLink {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    tenant?: Tenant;
    securityEntity?: SecurityEntity;
}