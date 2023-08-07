import { BasicCreate } from '@flexicore/flexicore-client';
import { Access } from './access';

export interface SecurityOperationCreate extends BasicCreate {
    defaultAccess?: Access;
}