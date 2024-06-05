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
  VICS_ENV: 'Dev',
  VICS_BASE_URL: 'http://43.198.25.162:30015/',
  Inspection_Service_Url: "http://18.167.19.156:30013"
}