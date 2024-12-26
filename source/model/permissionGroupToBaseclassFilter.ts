import { BaseclassFilter } from './baseclassFilter';
import { PermissionGroupToBaseclassSorting } from './permissionGroupToBaseclassSorting';

export interface PermissionGroupToBaseclassFilter extends BaseclassFilter {
    securedIds?: string[];
    permissionGroupIds?: string[];
    sorting?: PermissionGroupToBaseclassSorting;
}