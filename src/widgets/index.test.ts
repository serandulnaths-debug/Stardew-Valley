import { describe, it, expect, vi, beforeEach } from 'vitest';
import { onActivate, onDeactivate } from './index';
import { WidgetLocation } from '@remnote/plugin-sdk';

describe('Plugin Activation', () => {
  let mockPlugin: Parameters<typeof onActivate>[0];

  beforeEach(() => {
    // Reset mocks before each test
    mockPlugin = {} as Parameters<typeof onActivate>[0];
    Object.assign(mockPlugin, {
      settings: {
        registerStringSetting: vi.fn().mockResolvedValue(undefined),
        registerBooleanSetting: vi.fn().mockResolvedValue(undefined),
        registerNumberSetting: vi.fn().mockResolvedValue(undefined),
      },
      app: {
        registerCommand: vi.fn().mockResolvedValue(undefined),
        toast: vi.fn().mockResolvedValue(undefined),
        registerWidget: vi.fn().mockResolvedValue(undefined),
      },
      editor: {
        insertPlainText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('should register settings, commands, and widgets on activation', async () => {
    await onActivate(mockPlugin);

    // Assert Settings Registration
    expect(mockPlugin.settings.registerStringSetting).toHaveBeenCalledWith({
      id: 'name',
      title: 'What is your Name?',
      defaultValue: 'Bob',
    });

    expect(mockPlugin.settings.registerBooleanSetting).toHaveBeenCalledWith({
      id: 'pizza',
      title: 'Do you like pizza?',
      defaultValue: true,
    });

    expect(mockPlugin.settings.registerNumberSetting).toHaveBeenCalledWith({
      id: 'favorite-number',
      title: 'What is your favorite number?',
      defaultValue: 42,
    });

    // Assert Command Registration
    expect(mockPlugin.app.registerCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'editor-command',
        name: 'Editor Command',
        action: expect.any(Function),
      })
    );

    // Test the action function of the registered command
    const commandCall = vi.mocked(mockPlugin.app.registerCommand).mock.calls[0][0];
    if (typeof commandCall.action === "function") {
      await commandCall.action();
    }
    expect(mockPlugin.editor.insertPlainText).toHaveBeenCalledWith('Hello World!');

    // Assert Toast
    expect(mockPlugin.app.toast).toHaveBeenCalledWith("I'm a toast!");

    // Assert Widget Registration
    expect(mockPlugin.app.registerWidget).toHaveBeenCalledWith(
      'sample_widget',
      WidgetLocation.RightSidebar,
      { dimensions: { height: 'auto', width: '100%' } }
    );
  });

  it('should not throw on deactivation', async () => {
    await expect(onDeactivate(mockPlugin)).resolves.toBeUndefined();
  });
});
