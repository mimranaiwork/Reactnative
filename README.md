# Reactnative

Expo (TypeScript) app with on-device [Storybook for React Native](https://github.com/storybookjs/react-native).

## Getting started

```sh
npm install
npm start            # run the app
npm run storybook    # run the app with Storybook UI instead
```

`npm run storybook` sets `EXPO_PUBLIC_STORYBOOK_ENABLED=true`. With it unset, Metro strips Storybook from the bundle (see `metro.config.js`).

Storybook needs native modules (reanimated, gesture-handler, svg, etc.), so use a development build (`npx expo run:ios` / `npx expo run:android`) if Expo Go doesn't support the versions used here.

## Writing stories

- Components live in `components/`; stories sit next to them as `*.stories.tsx`.
- Storybook config is in `.rnstorybook/` (`main.ts`, `preview.tsx`).
- `.rnstorybook/storybook.requires.ts` is regenerated automatically by Metro; run `npm run storybook:generate` to regenerate it manually after adding stories.
- On-device addons: Controls and Actions.

## Scripts

| Script | Description |
| --- | --- |
| `npm start` | Start Expo dev server |
| `npm run storybook` | Start Expo with Storybook enabled |
| `npm run storybook:ios` / `storybook:android` | Same, opening a simulator/emulator |
| `npm run storybook:generate` | Regenerate `storybook.requires.ts` |
| `npm run typecheck` | Run TypeScript type checking |
