import { BasicCreate } from '@flexicore/flexicore-client';

export interface OperationToGroupCreate extends BasicCreate {
    operationId?: string;
    operationGroupId?: string;
}