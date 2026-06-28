// @ts-ignore: TS2305
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  const displayName = name || 'User';
  const displayLikesPizza = likesPizza ?? true;
  const displayFavoriteNumber = favoriteNumber ?? 42;

  return (
    <section
      aria-labelledby="sample-widget-title"
      className="p-4 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive shadow-sm"
    >
      <h1 id="sample-widget-title" className="text-xl font-semibold mb-2">Sample Plugin</h1>
      <p className="text-sm">
        Hi <strong>{displayName}</strong>, you {displayLikesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        <strong>{displayFavoriteNumber}</strong>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
