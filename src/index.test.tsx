import { render, screen } from '@testing-library/react';
import { MuiPaletteMode } from '.';

describe('<MuiPaletteMode/>', () => {
  it('render', async () => {
    render(<MuiPaletteMode>Hello</MuiPaletteMode>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('MuiPaletteMode');
  });
});
