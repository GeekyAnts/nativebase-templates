# NativeBase Universal App Template

The official NativeBase template for [universal apps]()

## Workspaces

This project is based on [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and requires yarn version 1.

The workspaces are listed in the root package.json under `workspaces`. New workspaces can be added here. Workspaces share node modules and handles a lot of cool features like auto-symlinking on `yarn`, so that you can use code across workspaces.

In this template, the `components` workspace acts as a library, providing a development and testing platform for reusable components, while the `mobile` and `web` workspaces are Expo and Next.js apps respectively that consume these libraries.

## Adding workspaces

## Running the app

In the root directory, run

```sh
yarn
```

Then start the components app using

```sh
yarn start:components
```

You can also run the Next.js web app with

```sh
yarn start:web
```

or run the mobile app on iOS or Android with

```sh
yarn start:app:ios
yarn start:app:android
```
