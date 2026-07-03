export interface Link {
  title: string;
  url: string;
  icon?: string;
  iconClass?: string;
  addPopupAfterClickingButton?: string;
}

export interface SocialLink {
  url: string;
  platform?: 'github' | 'twitter' | 'instagram' | 'linkedin' | 'email' | 'youtube' | 'facebook' | 'tiktok';
  iconUrl?: string;
  iconClass?: string;
}

export interface LinktreeConfig {
  profile: {
    name: string;
    bio: string;
    avatarUrl: string;
    avatarFrameUrl?: string;
    isVerified?: boolean;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    image: string;
    url: string;
    twitterHandle?: string;
  };
  footer?: {
    show: boolean;
    text: string;
    url: string;
  };
  theme: {
    backgroundImage: string;
    cardBackground: string;
    textColor: string;
    cardTextColor: string;
    buttonColor: string;
    buttonTextColor: string;
    buttonHoverColor: string;
    buttonHoverAnimation: 'scale' | 'lift' | 'glow' | 'shake' | 'tilt' | 'none';
    buttonHoverVibrate: boolean;
  };
  links: Link[];
  socials: SocialLink[];
  features: {
    enableAnalytics: boolean;
  }
}
