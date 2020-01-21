# Plugins for Inkdrop mobile

## How to add your plugin

### Update your plugin for mobile

#### Add `README-mobile.md`

It is a documentation for mobile.
Basically you can reuse your README.md but you have to remove sections for desktop like "How to install".

#### Remove "plugin" words from your plugin description

You can not use "plugin" or any words like "extension" in your package description or readme.
Because your plugin will be displayed as one of renderer options like so:

![Screenshot](https://github.com/inkdropapp/inkdrop-mobile-plugins/blob/master/docs/plugin-settings-ss.png?raw=true)

This is a workaround to avoid violating Apple's guideline.
Read [the blogpost](https://blog.inkdrop.info/a-promising-idea-towards-supporting-plugins-for-ios-app-5f7803715be7) for more detail on this workaround.

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

Add a test for your plugin to `test/index.js` to make sure it gets loaded properly.

For example:

```js
test.serial.cb("mermaid", t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, "mermaid");
    t.is(p instanceof Object, true);
    t.is(typeof p.activate, "function");
    t.is(typeof p.deactivate, "function");
    t.end();
  };

  require("../lib/mermaid");
});
```

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
