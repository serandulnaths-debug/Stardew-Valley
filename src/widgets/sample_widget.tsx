import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  // Fallbacks for when settings are unset
  const displayName = name || 'User';
  const displayPizza = likesPizza ?? true;
  const displayNumber = favoriteNumber ?? 42;

  return (
    <section
      className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive"
      aria-labelledby="widget-title"
    >
      <h1 id="widget-title" className="text-xl">Sample Plugin</h1>
      <p>
        Hi {displayName}, you {displayPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {displayNumber}!
      </p>
    </section>
  );
};

renderWidget(SampleWidget);
