export type PersonalizationPublicSettings = {
	Title: string;
	MetaDescription: string;
	DefaultToDarkMode: boolean;
	ProfileImageAssetId: string;
	HeaderImageAssetId: string;
};

export type PersonalizationPrivateSettings = {};

export type SubscriptionPublicSettings = {
	Tiers: {
		Name: string;
		Description: string;
		Color: string;
		AmountCents: number;
	}[];
	AllowOther: boolean;
	MinimumAllowed: boolean;
	MaximumAllowed: boolean;
	Fake: {
		Enabled: boolean;
	};
	ParalellEconomy: {
		Enabled: boolean;
		IsTest: boolean;
	};
	Crypto: {
		Enabled: boolean;
	};
	Stripe: {
		Enabled: boolean;
		Url: string;
	};
	Paypal: {
		Enabled: boolean;
		Url: string;
		ClientID: string;
	};
};

export type SubscriptionPrivateSettings = {};

export type CommentsPublicSettings = {
	AllowLinks: boolean;
	DefaultOrder: string;
	DefaultRestriction: {
		Minimum: string;
		Level: number;
	};
	ExplicitModeEnabled: true;
};

export type CommentsPrivateSettings = {};

export type Channel = {
	ChannelId: string;
	ParentChannelId: string;
	DisplayName: string;
	UrlStub: string;
	ImageAssetId: string;
	YoutubeUrl: string;
	RumbleUrl: string;
	OldChannelId: string;
};

export type Category = {
	CategoryId: string;
	ParentCategoryId: string;
	DisplayName: string;
	UrlStub: string;
	OldCategoryId: string;
};

export type NotificationPublicSettings = {};

export type NotificationPrivateSettings = {};

export type CMSPublicSettings = {
	DefaultOrder: string;
	Channels: Channel[];
	Categories: Category[];
	Menu: {
		AudioMenuLinkName: string;
		PictureMenuLinkName: string;
		VideoMenuLinkName: string;
		WrittenMenuLinkName: string;
	};
};

export type CMSPrivateSettings = {};

export type PublicSettings = {
	VersionNum: number;
	ModifiedOnUTC: string;
	Personalization: PersonalizationPublicSettings;
	Subscription: SubscriptionPublicSettings;
	Comments: CommentsPublicSettings;
	CMS: CMSPublicSettings;
	Notification: NotificationPublicSettings;
};

export type PrivateSettings = {
	ModifiedBy: string;
	Personalization: PersonalizationPrivateSettings;
	Subscription: SubscriptionPrivateSettings;
	Comments: CommentsPrivateSettings;
	CMS: CMSPrivateSettings;
	Notification: NotificationPrivateSettings;
};
