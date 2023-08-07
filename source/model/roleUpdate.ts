import { RoleCreate } from "./roleCreate";

export interface RoleUpdate extends RoleCreate {
    id?: string;
}