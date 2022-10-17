export const ROUTE_PATHS = {
  APPLICATION: '/application',
  HOME: '/',
  INTRODUCTION: '/self-introduction',
  LOGIN: '/login',
  NOTE: '/note',
  PANELIST: '/panelist',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
} as const;

type SettingRouteType = typeof ROUTE_PATHS.SETTING;
type SettingRoute = SettingRouteType[keyof SettingRouteType];

export type RoutePathType = typeof ROUTE_PATHS.LOGIN | SettingRoute;
