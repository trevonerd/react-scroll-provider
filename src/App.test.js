import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

test('React Scroll Provider tests', async () => {
    const { getByText } = render(<App />);
    const titleElement = getByText(/react scroll provider/i);
    expect(titleElement).toBeInTheDocument();

    const isIdleElement = getByText('idle');
    expect(isIdleElement).toBeInTheDocument();

    fireEvent.scroll(window, { target: { scrollY: 1000 } });
    const isScrollingElement = getByText('scrolling');
    expect(isScrollingElement).toBeInTheDocument();

    const scrollPositionElement = await waitForElement(() => getByText('1000'));
    expect(scrollPositionElement).toBeInTheDocument();
});
