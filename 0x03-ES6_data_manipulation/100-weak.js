export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, queryCount);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  return `Query successful for ${endpoint.name}`;
}
