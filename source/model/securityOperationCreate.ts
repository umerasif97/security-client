import { BasicCreate } from '@flexicore/flexicore-client';
import { Access } from './ioperations';

export interface SecurityOperationCreate extends BasicCreate {
    defaultAccess?: Access;
}