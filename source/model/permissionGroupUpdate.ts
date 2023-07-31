import { PermissionGroupCreate } from './permissionGroupCreate';

export interface PermissionGroupUpdate extends PermissionGroupCreate { 
    id?: string;
}