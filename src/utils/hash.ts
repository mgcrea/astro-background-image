// Bernstein's hash djb2
export const hash = (str: string) => {
  let hash = 5381; // Initial prime number
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i); // hash * 33 + c
  }
  return (hash >>> 0).toString(16); // Convert to non-negative hexadecimal
};