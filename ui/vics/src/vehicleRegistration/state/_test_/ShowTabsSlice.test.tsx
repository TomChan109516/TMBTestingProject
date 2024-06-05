import ShowTabsSlice, { hide, show } from '../ShowTabsSlice';

describe('ShowTabsSlice', () => {
  const initialState = {
    tabs: false,
  };

  it('should handle initial state', () => {
    expect(ShowTabsSlice(undefined, { type: 'unknown' })).toEqual({
      tabs: false,
    });
  });

  it('should handle hide action', () => {
    const actual = ShowTabsSlice(initialState, hide());
    expect(actual.tabs).toEqual(false);
  });

  it('should handle show action', () => {
    const actual = ShowTabsSlice(initialState, show());
    expect(actual.tabs).toEqual(true);
  });
});