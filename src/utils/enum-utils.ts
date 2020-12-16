export function getEnumKeyByEnumValue<T>(enumType: T, enumValue?: string | null): keyof T | null {
  const entry = Object.entries(enumType).find(([key, value]) => value === enumValue);

  if (!entry) {
    return null;
  }

  const key = <keyof T>entry[0];

  return key;
}

export function getEnumValueByEnumKey<T>(enumType: T, enumKey?: keyof T | null): T[keyof T] | null {
  const isExistsKey = !!Object.keys(enumType).find((key) => enumKey === key);

  if (!isExistsKey || !enumKey) {
    return null;
  }

  const enumValue = enumType[enumKey];

  return enumValue;
}
