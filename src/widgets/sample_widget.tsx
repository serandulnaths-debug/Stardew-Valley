import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  if (name === undefined || likesPizza === undefined || favoriteNumber === undefined) {
    return (
      <section
        className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
        aria-busy="true"
        aria-live="polite"
      >
        <h1 className="text-xl">Sample Plugin</h1>
        <p className="opacity-50">Loading settings...</p>
      </section>
    );
  }

  return (
    <section className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 className="text-xl">Sample Plugin</h1>
      <p>
        Hi <strong>{name || 'Guest'}</strong>, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        <strong>{favoriteNumber}</strong>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
