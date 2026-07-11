/**
 * Removes keys with null or undefined values from an object.
 *
 * @param obj - The object to compact.
 * @returns A new object with only the entries whose values are non-nullish.
 */
export function compact<T extends Record<string, unknown>>(
  obj: T,
): { [K in keyof T]: NonNullable<T[K]> } {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v != null)) as {
    [K in keyof T]: NonNullable<T[K]>;
  };
}
