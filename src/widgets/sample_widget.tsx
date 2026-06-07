import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name')) || 'User';
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number')) ?? 42;

  return (
    <section
      aria-label="Sample Plugin Widget"
      className="p-3 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
    >
      <h1 className="text-xl font-semibold mb-2">Sample Plugin</h1>
      <p>
        Hi {name}, you {likesPizza !== false ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
