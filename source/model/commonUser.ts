import { SecurityUser } from "./securityUser";

export interface CommonUser extends SecurityUser {
    email?: string;
    homeDir?: string;
    lastName?: string;
    totpSalt?: string;
    disabled?: boolean;
    dateApproved?: string;
    uiConfiguration?: string;
    lastVerificationDate?: string;
    totpSecret?: string;
    totpRecoveryCodes?: string;
    totpEnabled?: boolean;
    phoneNumber?: string;
    password?: string;
}