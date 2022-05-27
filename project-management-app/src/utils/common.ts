import { LOCAL_STORAGE_KEYS } from '../constants/common';

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

export const disableScrolling = () => {
  document.body.style.overflow = 'hidden';
};

export const enableScrolling = () => {
  document.body.style.overflow = 'unset';
};

const INITIAL_ORDER_STEP = 2 ** 16;

export const setColumnOrder = (lastColumnOrder?: number) =>
  lastColumnOrder ? lastColumnOrder + INITIAL_ORDER_STEP : INITIAL_ORDER_STEP - 1;

export const calculateUpdatedColumnOrder = (
  prevColumnOrder: number,
  nextColumnOrder: number | undefined,
  direction: 'backward' | 'forward'
) => {
  if (nextColumnOrder) return Math.floor((prevColumnOrder + nextColumnOrder) / 2);
  return direction === 'forward'
    ? prevColumnOrder + INITIAL_ORDER_STEP
    : Math.floor(prevColumnOrder / 2);
};
