import { Clazz } from './clazz';
import { BaseclassCreate } from './baseclassCreate';

export interface PermissionGroupToBaseclassCreate extends BaseclassCreate {
    securedId?: string;
    securedType?: Clazz;
    permissionGroupId?: string;
}