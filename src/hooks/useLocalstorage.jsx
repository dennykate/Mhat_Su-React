import { AES } from "crypto-js";
import CryptoJS from "crypto-js";
import { useCallback, useMemo } from "react";

const useLocalstorage = () => {
  const secretKey = useMemo(() => import.meta.env.VITE_SECRET_KEY, []);

  const set = useCallback(
    (key, value, expires = undefined) => {
      const encryptedValue = AES.encrypt(value, secretKey).toString();

      localStorage.setItem(key, encryptedValue);

      if (expires) {
        const expirationTimestamp = Date.now() + expires * 24 * 60 * 60 * 1000;
        localStorage.setItem(
          `${key}_expiration`,
          expirationTimestamp.toString()
        );
      }
    },
    [secretKey]
  );

  const get = useCallback(
    (key) => {
      const value = localStorage.getItem(key);
      const expirationTimestamp = localStorage.getItem(`${key}_expiration`);

      if (!value) return undefined;

      // Check expiration
      if (
        expirationTimestamp &&
        Date.now() > parseInt(expirationTimestamp, 10)
      ) {
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}_expiration`);
        return "Expired key";
      }

      const decryptedValue = AES.decrypt(value, secretKey).toString(
        CryptoJS.enc.Utf8
      );

      return decryptedValue;
    },
    [secretKey]
  );

  const remove = useCallback((key) => {
    localStorage.removeItem(key);
  }, []);

  return { set, get, remove };
};

export default useLocalstorage;
