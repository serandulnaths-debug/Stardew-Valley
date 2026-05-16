import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
      aria-labelledby="sample-plugin-heading"
    >
      <h1 id="sample-plugin-heading" className="text-xl font-bold mb-2">Sample Plugin</h1>
      <p className="text-sm">
        Hi {name || 'there'}, you {!!likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber ?? 'unknown'}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
