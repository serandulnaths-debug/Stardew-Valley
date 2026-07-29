import { declareIndexPlugin, type ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';
import '../index.css'; // import <widget-name>.css

async function onActivate(plugin: ReactRNPlugin) {
  // ⚡ Bolt Optimization: Group independent SDK registrations using Promise.all to execute them concurrently instead of sequentially.
  // This reduces the plugin's activation time by avoiding sequential IPC round-trips to the parent window.
  // Expected impact: Activation time drops from O(N) to roughly O(1) (bounded by the slowest registration).
  await Promise.all([
    // Register settings
    plugin.settings.registerStringSetting({
      id: 'name',
      title: 'What is your Name?',
      defaultValue: 'Bob',
    }),

    plugin.settings.registerBooleanSetting({
      id: 'pizza',
      title: 'Do you like pizza?',
      defaultValue: true,
    }),

    plugin.settings.registerNumberSetting({
      id: 'favorite-number',
      title: 'What is your favorite number?',
      defaultValue: 42,
    }),

    // A command that inserts text into the editor if focused.
    plugin.app.registerCommand({
      id: 'editor-command',
      name: 'Editor Command',
      // deno-lint-ignore require-await
      action: async () => {
        plugin.editor.insertPlainText('Hello World!');
      },
    }),

    // Show a toast notification to the user.
    plugin.app.toast("I'm a toast!"),

    // Register a sidebar widget.
    plugin.app.registerWidget('sample_widget', WidgetLocation.RightSidebar, {
      dimensions: { height: 'auto', width: '100%' },
    }),
  ]);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
