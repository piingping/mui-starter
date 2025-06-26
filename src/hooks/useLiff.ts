import { useEffect, useState } from 'react';
import liff from '@line/liff';

export const useLiff = () => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await liff.init({ liffId: import.meta.env.VITE_LIFF_ID });
        setIsReady(true);

        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          setIsLoggedIn(true);
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
        }
      } catch (err) {
        setError(err);
      }
    };

    init();
  }, []);

  return { isReady, isLoggedIn, profile, error, liff };
};
