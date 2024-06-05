import "@testing-library/jest-dom";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});

Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});

window._env_ = {
  SCS_ENV: 'Dev',
  SCS_BASE_URL: 'http://43.198.25.162:30015/',
}