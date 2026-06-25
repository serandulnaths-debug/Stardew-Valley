// @ts-ignore: TS2305
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section
      aria-labelledby="sample-plugin-heading"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 id="sample-plugin-heading" className="text-xl">Sample Plugin</h1>
      <div>
        Hi {name || 'User'}, you {likesPizza !== false ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber ?? 42}!
      </div>
    </section>
  );
};

renderWidget(SampleWidget);
