import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
      aria-labelledby="sample-widget-title"
    >
      <h1 id="sample-widget-title" className="text-xl font-semibold mb-2">Sample Plugin</h1>
      <p>
        Hi <strong>{name || 'User'}</strong>, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        <strong>{favoriteNumber ?? 'unknown'}</strong>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
