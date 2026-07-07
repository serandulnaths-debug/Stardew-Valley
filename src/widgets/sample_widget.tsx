// @ts-ignore: TS2305 - useTracker is not exported by the SDK but is required for tracking reactivity
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const safeName = name || 'User';
  const safeLikesPizza = likesPizza ?? true;
  const safeFavoriteNumber = favoriteNumber ?? 42;

  return (
    <section
      aria-labelledby="widget-title"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 id="widget-title" className="text-xl">Sample Plugin</h1>
      <p>
        Hi {safeName}, you {safeLikesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {safeFavoriteNumber}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
