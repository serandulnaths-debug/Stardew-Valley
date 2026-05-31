import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const isLoaded = name !== undefined; // Settings initialize together or name acts as indicator. Checking all might cause issues if a setting was never saved.

  return (
    <section
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
      aria-live="polite"
      aria-busy={!isLoaded}
    >
      <h1 className="text-xl">Sample Plugin</h1>
      {!isLoaded ? (
        <p className="opacity-50">Loading settings...</p>
      ) : (
        <p>
          Hi {name}, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
          {favoriteNumber}!
        </p>
      )}
    </section>
  );
};

renderWidget(SampleWidget);
