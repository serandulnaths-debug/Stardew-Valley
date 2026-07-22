import { declareIndexPlugin, type ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';
import '../index.css'; // import <widget-name>.css

async function onActivate(plugin: ReactRNPlugin) {
  // Execute independent IPC registrations concurrently using Promise.all to reduce parent-window round-trip delays and improve startup performance.
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

    // Register a sidebar widget.
    plugin.app.registerWidget('sample_widget', WidgetLocation.RightSidebar, {
      dimensions: { height: 'auto', width: '100%' },
    }),
  ]);

  // Show a toast notification to the user.
  await plugin.app.toast("I'm a toast!");
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
