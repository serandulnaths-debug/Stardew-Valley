import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name')) || 'Bob';
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza')) ?? true;
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number')) ?? 42;

  return (
    <section aria-label="Sample Plugin Widget" className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 className="text-xl">Sample Plugin</h1>
      <p>
        Hi {name}, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
