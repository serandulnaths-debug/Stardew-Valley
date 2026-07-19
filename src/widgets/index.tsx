import { declareIndexPlugin, type ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';
import '../index.css'; // import <widget-name>.css

async function onActivate(plugin: ReactRNPlugin) {
  // Register independent settings, commands, and widgets concurrently
  // to improve plugin activation performance by avoiding sequential round-trips.
  await Promise.all([
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
    plugin.app.registerCommand({
      id: 'editor-command',
      name: 'Editor Command',
      // deno-lint-ignore require-await
      action: async () => {
        plugin.editor.insertPlainText('Hello World!');
      },
    }),
    plugin.app.toast("I'm a toast!"),
    plugin.app.registerWidget('sample_widget', WidgetLocation.RightSidebar, {
      dimensions: { height: 'auto', width: '100%' },
    }),
  ]);
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
