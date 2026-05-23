import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const isLoading = name === undefined || likesPizza === undefined || favoriteNumber === undefined;

  return (
    <section className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 className="text-xl">Sample Plugin</h1>
      <div aria-live="polite">
        {isLoading ? (
          <p>Loading preferences...</p>
        ) : (
          <p>
            Hi <strong>{name}</strong>, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
            <strong>{favoriteNumber}</strong>!
          </p>
        )}
      </div>
    </section>
  );
};

renderWidget(SampleWidget);
