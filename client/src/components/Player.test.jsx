import React from 'react';
import Player from './Player';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Player Component', () => {

    it('Renders without crashing', () => {
        const virtualPlayer = rtl.render(<Player player={{name: "Meg", country: "USA", searches: 100}}/>);
        virtualPlayer;
    });
    it('Includes passed prop value in render (USA)', () => {
        const virtualPlayer = rtl.render(<Player player={{name: "Meg", country: "USA", searches: 100}}/>);
        const usa = virtualPlayer.queryByText(/USA/i);

        expect(usa).toBeInTheDocument();
    });
});