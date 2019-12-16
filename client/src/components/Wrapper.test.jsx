import React from 'react';
import Wrapper from './Wrapper';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Wrapper Component', () => {
    
    it('Does not include Michael Vick', () => {
        const virtualWrapper = rtl.render(<Wrapper />);
        const MV = virtualWrapper.queryByText(/Michael Vick/i);
        expect(MV).toBeFalsy();
    });

    it('Includes Alex Morgan as a test id', () => {
        const virtualWrapper = rtl.render(<Wrapper />);
        virtualWrapper.findAllByTestId(/Alex Morgan/i);
    });
});