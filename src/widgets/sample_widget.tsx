// @ts-ignore: TS2305
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';
import { useState } from 'react';

export const SampleWidget = () => {
  const plugin = usePlugin();
  const [isBusy, setIsBusy] = useState(false);

  const name = useTracker(() => plugin.settings.getSetting<string>('name')) || 'User';
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number')) ?? 42;

  const handleInsert = async () => {
    setIsBusy(true);
    await plugin.app.toast(`Hi ${name}!`);
    setIsBusy(false);
  };

  return (
    <section
      aria-labelledby="widget-title"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 id="widget-title" className="text-xl mb-2">Sample Plugin</h1>
      <div className="mb-4">
        Hi {name}, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </div>
      <button
        type="button"
        aria-label="Insert greeting"
        aria-busy={isBusy}
        disabled={isBusy}
        onClick={handleInsert}
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300 focus:outline-none disabled:opacity-50 transition-colors"
      >
        {isBusy ? 'Greeting...' : 'Insert Greeting'}
      </button>
    </section>
  );
};

renderWidget(SampleWidget);
