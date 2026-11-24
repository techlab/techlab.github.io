---
layout: product
title: Documentation - create-jquery-plugin
description: CLI for creating ready-to-start modern jQuery Plugins
head:
  - - meta
    - name: description
      content: CLI for creating ready-to-start modern jQuery Plugins
  - - meta
    - name: keywords
      content: jQuery, jQuery plugin, CLI, jQuery plugin development, jQuery plugin development environment, jQuery plugin development setup, jQuery plugin development tools, jQuery plugin development templates, jQuery plugin development build system, jQuery plugin development hot loading, jQuery plugin development example page, jQuery plugin development readme, jQuery plugin development license, jQuery plugin development author, jQuery plugin development repository, jQuery plugin development version, jQuery plugin development description, jQuery plugin development package manager, jQuery plugin development template
---

<div class="tl-md-container tl-md-container-mt vp-doc">

## How to Start the Development

To start the development process, cd to your new plugin directory and run `npm start` or `yarn start`. For example, if your new plugin is `jquery-my-plugin`, just run:

```bash
cd jquery-my-plugin
npm start
```

It will open the `example/index.html` file with [Browserify](http://browserify.org/) sync. You can start coding in the `src` directory, the example page will hot load as you make changes.

## How to Do Unit Testing

The development environment has pre-configured unit testing with [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/). The test scripts are under the `test` directory. You can add new test cases there. You can also configure the tests online on [Travis CI](https://travis-ci.org/).

To run the unit testing:

```bash
npm test
```

## How to Publish to npm

You can publish your new jQuery plugin to npm just like any other project. Just run the [publish command](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages#publishing-unscoped-public-packages) (you should be [logged in to npm](https://docs.npmjs.com/creating-a-new-npm-user-account#testing-your-new-account-with-npm-login)).

To publish:

```bash
npm publish
```

## Directory Structure

The project boilerplate is from [https://github.com/techlab/jquery-plugin-boilerplate](https://github.com/techlab/jquery-plugin-boilerplate)

```
jquery-my-plugin
├── examples
│   └── index.html
├── node_modules
├── src
│   ├── js
│   │   └── jquery-plugin-boilerplate.js
│   └── scss
│       └── jquery-plugin-boilerplate.scss
├── test
│   ├── test-template.html
│   └── test.js
├── .gitignore
├── .npmignore
├── CONTRIBUTING.md
├── gulpfile.js
├── karma.conf.js
├── LICENSE
├── package.json
└── README.md
```

## Parameters

Details on the parameters and settings on the create-jquery-plugin CLI tool.

### Package Name

Package Name is the only required parameter on the tool. You can provide it when tool prompts for it or you can pass as a first argument. If you pass as an argument, the tool will work as a fast track mode and will not prompt for any other settings. All other settings will be the default settings or the previous setting you have provided.

### Description

It is the description of your package and it will be added to the README, package.json, and to the plugin files. You can change it any time after you start the development. Default is "Made with create-jquery-plugin".

### Version

It is the version of your package and it will be added to the README, package.json, and to the plugin files. You can change it any time after you start the development. Default is "1.0.0".

### Author

It is the author of your package and it will be added to the package.json, and to the plugin files. You can change it any time after you start the development. The tool will try to read it from the git if available otherwise it will be empty as default.

### Repository

It is the repository URL of your package and it will be added to the package.json, and on plugin files. You can change it any time after you start the development. Default is empty.

### License

It is the license of your package and it will be added to the README, package.json, and on plugin files. You can change it any time after you start the development. Default is "MIT".

### Package Manager

It is the package-manager of your choice. You can choose npm or yarn. If you choose yarn, make sure you are [installed yarn](https://classic.yarnpkg.com/en/docs/install/) already. Default is npm.

### Template

The plugin template to be used to setup your development environment. You can choose "JavaScript with CSS" or "JavaScript with Sass". The only difference between the two templates is the latter supports SCSS while the first is CSS. Default is "JavaScript with CSS".

</div>