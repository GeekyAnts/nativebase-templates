# NativeBase Universal App Template

The official NativeBase template for [universal apps]()

## Workspaces

This project is based on [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) and requires npm version 7 or later.

The workspaces are listed in the root package.json under `workspaces`. New workspaces can be added here. Workspaces share node modules and handles a lot of cool features like auto-symlinking on `npm install`, so that you can use code across workspaces.

In this template, the `components` workspace acts as a library, providing a development and testing platform for reusable components, while the `mobile` and `web` workspaces are Expo and Next.js apps respectively that consume these libraries.

## Adding workspaces

## Running the app

In the root directory, run

```sh
npm install
```

Then start the components app using

```sh
npm run start:components
```

You can also run the Next.js web app with

```sh
npm run start:web
```

or run the mobile app on iOS or Android with

```sh
npm run start:app:ios
npm run start:app:android
```
