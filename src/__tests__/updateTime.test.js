
import { updateTimes } from "../Views/Reserve";
jest.mock('../utils/api', () => ({
  fetchAPI: jest.fn(), 
  submitAPI: jest.fn(), 
}));
import { fetchAPI } from "../utils/api";

describe('updateTimes reducer', () => {
   beforeEach(() => {
    fetchAPI.mockClear();
  });

  test('should return same value when date is not updated (no action.payload for UPDATE_TIMES)', () => {
    fetchAPI.mockReturnValue(['17:00', '18:00']);
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'SOME_OTHER_ACTION', payload: null }; 
    const newState = updateTimes(initialState, action); 
    expect(newState).toEqual(initialState);
  });

  test('should return updated times when date changes', () => {
    fetchAPI.mockReturnValue(['17:30', '18:30']);
    const initialState = ['17:00', '18:00'];
    const testDate = new Date('2025-12-17'); 
    const action = { type: 'UPDATE_TIMES', payload: testDate.toISOString() }; 
    const newState = updateTimes(initialState, action); 
    expect(newState).toEqual(['17:30', '18:30']);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.payload)); 
  });

});