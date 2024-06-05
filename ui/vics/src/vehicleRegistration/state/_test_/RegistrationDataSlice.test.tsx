import ShowDataSlice, { setData } from '../RegistrationDataSlice';

const reducer = ShowDataSlice;
describe('ShowDataSlice', () => {
  const initialState = {
    regdata: {},
    appointmentId: "",
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      regdata: {},
      appointmentId: "",
    });
  });

  it('should handle setData with empty payload', () => {
    const actual = reducer(initialState, setData({}));
    expect(actual.regdata).toEqual(undefined);
    expect(actual.appointmentId).toEqual(undefined);
  });

  it('should handle setData with non-empty payload', () => {
    const actual = reducer(initialState, setData({ regdata: { id: 1, name: 'test' }, appointmentId: '123' }));
    expect(actual.regdata).toEqual({ id: 1, name: 'test' });
    expect(actual.appointmentId).toEqual('123');
  });

});