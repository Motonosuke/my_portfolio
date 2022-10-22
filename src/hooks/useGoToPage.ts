import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { ROUTE_PATHS } from 'constants/route-paths';

export const useGoToPage = () => {
  const router = useRouter();

  const goToHomePage = useCallback(() => {
    router.push(ROUTE_PATHS.HOME);
  }, [router]);

  const goToSelfIntroductionPage = useCallback(() => {
    router.push(ROUTE_PATHS.INTRODUCTION);
  }, [router]);

  const goToApplicationPage = useCallback(() => {
    router.push(ROUTE_PATHS.APPLICATION);
  }, [router]);

  const goToNotePage = useCallback(() => {
    router.push(ROUTE_PATHS.NOTE);
  }, [router]);

  return {
    goToApplicationPage,
    goToHomePage,
    goToNotePage,
    goToSelfIntroductionPage,
  } as const;
};
