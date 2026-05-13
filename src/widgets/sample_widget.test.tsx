import React from 'react';
import { render, screen } from '@testing-library/react';
import { SampleWidget } from './sample_widget';
import { usePlugin, useTracker } from '@remnote/plugin-sdk';

jest.mock('@remnote/plugin-sdk', () => ({
  usePlugin: jest.fn(),
  useTracker: jest.fn(),
  renderWidget: jest.fn(),
}));

describe('SampleWidget', () => {
  let mockGetSetting: jest.Mock;

  beforeEach(() => {
    mockGetSetting = jest.fn();
    (usePlugin as jest.Mock).mockReturnValue({
      settings: {
        getSetting: mockGetSetting,
      },
    });

    (useTracker as jest.Mock).mockImplementation((callback) => callback());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the users name and favorite number', () => {
    mockGetSetting.mockImplementation((key) => {
      if (key === 'name') return 'Jules';
      if (key === 'favorite-number') return 42;
      return null;
    });

    render(<SampleWidget />);

    expect(screen.getByText(/Hi Jules/i)).toBeInTheDocument();
    expect(screen.getByText(/favorite number is 42/i)).toBeInTheDocument();
  });

  it('renders correctly when the user likes pizza', () => {
    mockGetSetting.mockImplementation((key) => {
      if (key === 'pizza') return true;
      if (key === 'name') return 'Jules';
      if (key === 'favorite-number') return 42;
      return null;
    });

    render(<SampleWidget />);

    expect(screen.getByText(/you do like pizza/i)).toBeInTheDocument();
  });

  it('renders correctly when the user does not like pizza', () => {
    mockGetSetting.mockImplementation((key) => {
      if (key === 'pizza') return false;
      if (key === 'name') return 'Jules';
      if (key === 'favorite-number') return 42;
      return null;
    });

    render(<SampleWidget />);

    expect(screen.getByText(/you don't like pizza/i)).toBeInTheDocument();
  });
});
