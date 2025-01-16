export type UserPublicData = {
	UserName: string;
	DisplayName: string;
	Identities: string[];
	Bio: string;
	ProfileImagePNG: string;
};

export type UserPublicRecord = {
	UserID: string;
	CreatedOnUTC: string;
	ModifiedOnUTC: string;
	DisabledOnUTC: string;
	Data: UserPublicData;
};

export type UserPrivateData = {
	Emails: string[];
	FirstName: string;
	LastName: string;
	OldUserID: string;
	MailingAddressLine1: string;
	MailingAddressLine2: string;
	MailingAddressCity: string;
	MailingAddressState: string;
	MailingAddressPostalCode: string;
	MailingAddressCountryCode: string;
};

export type UserPrivateRecord = {
	Roles: string[];
	CreatedBy: string;
	ModifiedBy: string;
	DisabledBy: string;
	Data: UserPrivateData;
};

export type UserRecord = {
	Public: UserPublicRecord;
	Private: UserPrivateRecord;
};
