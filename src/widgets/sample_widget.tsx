// @ts-ignore: TS2305
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  // @ts-ignore: TS2305
  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  // @ts-ignore: TS2305
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  // @ts-ignore: TS2305
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive" aria-labelledby="widget-title">
      <h1 id="widget-title" className="text-xl font-bold mb-2">Sample Plugin</h1>
      <p>
        Hi {name || 'User'}, you {likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber ?? 42}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
