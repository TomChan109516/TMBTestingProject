import ShowOhmDataSlice, { setOHMData } from '../ohmSlice';

describe('ShowOhmDataSlice', () => {
  const initialState = {
    ohmdata: {},
  };

  it('should handle initial state', () => {
    expect(ShowOhmDataSlice(undefined, { type: 'unknown' })).toEqual({
      ohmdata: {},
    });
  });

  it('should handle setOHMData with empty payload', () => {
    const actual = ShowOhmDataSlice(initialState, setOHMData({}));
    expect(actual.ohmdata).toEqual(undefined);
  });

  it('should handle setOHMData with non-empty payload', () => {
    const actual = ShowOhmDataSlice(initialState, setOHMData({ regdata: { id: 1, name: 'test' } }));
    expect(actual.ohmdata).toEqual({ id: 1, name: 'test' });
  });

});