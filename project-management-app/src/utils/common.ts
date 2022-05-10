import { LOCAL_STORAGE_KEYS } from '../constants/common-constants';

export const setToLocalStorage = <T>(
  key: keyof typeof LOCAL_STORAGE_KEYS,
  value: T,
  serializer: (value: T) => string = JSON.stringify
) => localStorage.setItem(key, serializer(value));

export const getFromLocalStorage = <T>(
  key: keyof typeof LOCAL_STORAGE_KEYS,
  deserializer: (value: string) => T = JSON.parse
) => {
  const value = localStorage.getItem(key);
  return value ? deserializer(value) : undefined;
};

export const removeFromLocalStorage = (key: keyof typeof LOCAL_STORAGE_KEYS) =>
  localStorage.removeItem(key);
