import { BasicCreate } from '@flexicore/flexicore-client';

export interface PermissionGroupToBaseclassCreate extends BasicCreate {
    baseclassId?: string;
    permissionGroupId?: string;
}