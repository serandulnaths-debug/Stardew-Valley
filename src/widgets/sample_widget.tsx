// @ts-ignore: TS2305
import { usePlugin, renderWidget, useTracker } from '@remnote/plugin-sdk';

export const SampleWidget = () => {
  const plugin = usePlugin();

  // deno-lint-ignore prefer-const
  let name = useTracker(() => plugin.settings.getSetting<string>('name'));
  // deno-lint-ignore prefer-const
  let likesPizza = useTracker(() => plugin.settings.getSetting<boolean>('pizza'));
  // deno-lint-ignore prefer-const
  let favoriteNumber = useTracker(() => plugin.settings.getSetting<number>('favorite-number'));

  return (
    <div className="p-2 m-2 rounded-lg rn-clr-background-light-positive rn-clr-content-positive">
      <h1 className="text-xl">Sample Plugin</h1>
      <div>
        Hi {name}, you {
        // deno-lint-ignore no-extra-boolean-cast
        !!likesPizza ? 'do' : "don't"} like pizza and your favorite number is{' '}
        {favoriteNumber}!
      </div>
    </div>
  );
};

renderWidget(SampleWidget);
