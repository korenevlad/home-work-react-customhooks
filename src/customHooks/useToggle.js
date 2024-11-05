import { useReducer } from 'react';

function toggleReducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      return (state + 1) % action.payload.length; 
    default:
      return state;
  }
}

export function useToggle(initialValues = [true, false]) {
  const [state, dispatch] = useReducer(toggleReducer, 0);

  const toggle = () => {
    dispatch({ type: 'NEXT', payload: initialValues });
  };

  return [initialValues[state], toggle];
}
