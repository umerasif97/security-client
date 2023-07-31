import { GeneralFiltering } from "./generalFiltering";

export interface PermissionGroupFiltering extends GeneralFiltering {
        externalIds?: string[];
}