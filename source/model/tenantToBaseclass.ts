import { Basic } from '@flexicore/flexicore-client';
import { Baseclass } from './baseclass';
import { PermissionGroup } from './permissionGroup';
import { Clazz } from './clazz';
import { SecurityOperation } from './securityOperation';
import { Tenant } from './tenant';
import { SecurityEntity } from './securityEntity';

export interface TenantToBaseclass extends Basic {
    baseclass?: Baseclass;
    permissionGroup?: PermissionGroup;
    clazz?: Clazz;
    operation?: SecurityOperation;
    access?: string;
    tenant?: Tenant;
    securityEntity?: SecurityEntity;
}