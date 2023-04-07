const localStorageMock = (<T>() => {
  let store: Record<string, T> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: T) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
