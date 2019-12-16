import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders without crashing', () => {
  rtl.render(<App />);
});
