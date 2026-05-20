import { usePlugin, renderWidget, useTrackerPlugin as useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const isLoading = name === undefined || likesPizza === undefined || favoriteNumber === undefined;

  return (
    <section
      aria-labelledby="sample-widget-title"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 id="sample-widget-title" className="text-xl font-semibold mb-2">Sample Plugin</h1>
      {isLoading ? (
        <p className="text-sm opacity-70" aria-live="polite">Loading preferences...</p>
      ) : (
        <p>
          Hi {name}, you {!!likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
          {favoriteNumber}!
        </p>
      )}
    </section>
  );
};

renderWidget(SampleWidget);
