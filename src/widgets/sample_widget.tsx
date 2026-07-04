import { usePlugin, renderWidget } from '@remnote/plugin-sdk';
// @ts-ignore: TS2305
import { useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  const name = useTracker(() => plugin.settings.getSetting<string>('name'));
  const likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  const favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section
      aria-labelledby="sample-widget-title"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 id="sample-widget-title" className="text-xl font-semibold mb-2">Sample Plugin</h1>
      <p>
        Hi <span className="font-medium">{name || 'User'}</span>, you {likesPizza ?? true ? 'do' : "don't"} like pizza and your favorite number is{' '}
        <span className="font-medium">{favoriteNumber ?? 42}</span>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
