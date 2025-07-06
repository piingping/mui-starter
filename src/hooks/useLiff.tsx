import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import liff from "@line/liff";

interface LiffContextType {
  isReady: boolean;
  isLoggedIn: boolean;
  profile: any | null;
  error: unknown;
}

const LiffContext = createContext<LiffContextType>({
  isReady: false,
  isLoggedIn: false,
  profile: null,
  error: null,
});

interface LiffProviderProps {
  children: ReactNode;
}

export const LiffProvider = ({ children }: LiffProviderProps) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<any | null>(null);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const init = async () => {
      try {
        await liff.init({ liffId: import.meta.env.VITE_LIFF_ID });

        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: location.href });
          return;
        }

        const url = new URL(location.href);
        if (url.searchParams.has("code") || url.searchParams.has("state")) {
          history.replaceState(null, "", location.origin + location.pathname);
        }

        const profile = await liff.getProfile();
        setProfile(profile);
        setIsLoggedIn(true);
      } catch (err) {
        setError(err);
      } finally {
        setIsReady(true);
      }
    };

    init();
  }, []);

  return (
    <LiffContext.Provider value={{ isReady, isLoggedIn, profile, error }}>
      {children}
    </LiffContext.Provider>
  );
};

export const useLiff = () => useContext(LiffContext);
