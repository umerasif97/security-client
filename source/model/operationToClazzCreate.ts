import { BasicCreate } from '@flexicore/flexicore-client';

export interface OperationToClazzCreate extends BasicCreate {
    securityOperationId?: string;
    clazzId?: string;
}