import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section aria-labelledby="widget-title" className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 id="widget-title" className="text-xl">Sample Plugin</h1>
      <p>
        Hi <strong>{name || 'User'}</strong>, you <strong>{!!likesPizza ? 'do' : "don't"}</strong> like pizza and your favorite number is{' '}
        <strong>{favoriteNumber ?? 42}</strong>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
