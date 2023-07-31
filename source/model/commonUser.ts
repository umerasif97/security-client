import { Basic } from "@flexicore/flexicore-client";

export interface CommonUser extends Basic {
    email?: string;
    homeDir?: string;
    surName?: string;
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