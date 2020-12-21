export function isNull(value: any | null): boolean {
  if (value === null) {
    return true;
  }

  return false;
}

export function isUndefined(value: any | undefined): boolean {
  if (value === undefined) {
    return true;
  }

  return false;
}

export function isEmpty(value: any | null | undefined): boolean {
  if ([null, undefined].includes(value)) {
    return true;
  }

  return false;
}
