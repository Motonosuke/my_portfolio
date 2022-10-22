export const ROUTE_PATHS = {
  APPLICATION: '/application',
  FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=100057381706087',
  GITHUB_URL: 'https://github.com/Motonosuke',
  HOME: '/',
  INTRODUCTION: '/self-introduction',
  LOGIN: '/login',
  NOGIZAKA_URL: 'https://nogizaka-radio.com',
  NOTE: '/note',
  PANELIST: '/panelist',
  PORTFOLIO_URL: 'https://motonosuke.com',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
  TWITTER_URL: 'https://twitter.com/motofreecall',
  YOUTUBE_CHANNEL_URL: 'https://www.youtube.com/channel/UCFp5T-QmCGCg-1KJ92Y-QHg',
} as const;

type SettingRouteType = typeof ROUTE_PATHS.SETTING;
type SettingRoute = SettingRouteType[keyof SettingRouteType];

export type RoutePathType = typeof ROUTE_PATHS.LOGIN | SettingRoute;
