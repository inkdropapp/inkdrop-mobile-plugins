# Plugins for Inkdrop mobile

## How to add your plugin

### Add submodule

Run the following command:

```sh
git submodule add <YOUR_REPO_URL> packages/<PLUGIN_NAME>
```

### Edit `package.json`

Add your plugin to `devDependencies` like so:

```json
  "devDependencies": {
    "math": "file:packages/math",
  }
```

Then, run `npm install`.

### Build

Run the following command:

```sh
npm run build
```

### Test

Add a test for your plugin to `test/index.js`.

## How to debug your plugin

Build plugin metadata:

```sh
npm run build:index
```

Launch webpack server:

```sh
npm run dev:server
```

Then, open up a debugger tool:

[https://inkdrop-mobile-plugin-debugger.netlify.com/](https://inkdrop-mobile-plugin-debugger.netlify.com/)

Open Developer Tools and you should see like this:

![Screenshot](https://github.com/inkdropapp/inkdrop-mobile-plugins/blob/master/docs/debugger-tool-ss.png?raw=true)
