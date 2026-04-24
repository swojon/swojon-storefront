export function createEventId(eventName: string, referenceId?: string | number) {
  const randomPart =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

  return referenceId
    ? `${eventName}_${referenceId}_${randomPart}`
    : `${eventName}_${randomPart}`;
}