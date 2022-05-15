export const setToLocalStorage = <T>(
  key: string,
  value: T,
  serializer: (value: T) => string = JSON.stringify
) => localStorage.setItem(key, serializer(value));

export const getFromLocalStorage = <T>(
  key: string,
  deserializer: (value: string) => T = JSON.parse
) => {
  const value = localStorage.getItem(key);
  return value ? deserializer(value) : undefined;
};

export const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);
