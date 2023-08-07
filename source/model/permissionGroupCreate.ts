import { BasicCreate } from '@flexicore/flexicore-client';

export interface PermissionGroupCreate extends BasicCreate {
    externalId?: string;
}