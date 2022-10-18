export const ROUTE_PATHS = {
  APPLICATION: '/application',
  FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=100057381706087',
  GITHUB_URL: 'https://github.com/Motonosuke',
  HOME: '/',
  INTRODUCTION: '/self-introduction',
  LOGIN: '/login',
  NOTE: '/note',
  PANELIST: '/panelist',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
  TWITTER_URL: 'https://twitter.com/motofreecall',
} as const;

type SettingRouteType = typeof ROUTE_PATHS.SETTING;
type SettingRoute = SettingRouteType[keyof SettingRouteType];

export type RoutePathType = typeof ROUTE_PATHS.LOGIN | SettingRoute;
