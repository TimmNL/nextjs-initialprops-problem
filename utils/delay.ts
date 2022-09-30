export async function delay (milliseconds = 1): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(undefined), milliseconds));
}
