import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <section
      aria-label="Sample Plugin Widget"
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 className="text-xl font-semibold mb-2">Sample Plugin</h1>
      <p className="text-sm">
        Hi <span className="font-medium">{name || 'User'}</span>, you{' '}
        <span className="font-medium">{likesPizza ?? true ? 'do' : "don't"}</span> like pizza and your favorite number is{' '}
        <span className="font-medium">{favoriteNumber ?? 42}</span>!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
