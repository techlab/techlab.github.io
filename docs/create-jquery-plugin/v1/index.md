---
title: create-jquery-plugin
description: CLI for creating ready-to-start modern jQuery Plugins
head:
  - - meta
    - name: description
      content: CLI for creating ready-to-start modern jQuery Plugins
  - - meta
    - name: keywords
      content: jQuery, jQuery plugin, CLI, jQuery plugin development, jQuery plugin development environment, jQuery plugin development setup, jQuery plugin development tools, jQuery plugin development templates, jQuery plugin development build system, jQuery plugin development hot loading, jQuery plugin development example page, jQuery plugin development readme, jQuery plugin development license, jQuery plugin development author, jQuery plugin development repository, jQuery plugin development version, jQuery plugin development description, jQuery plugin development package manager, jQuery plugin development template
---

# create-jquery-plugin

CLI for creating ready-to-start modern jQuery Plugins 
<hr>

create-jquery-plugin is a CLI tool for creating a ready-to-start jQuery plugin development environment with modern configurations. It will create a development environment with a pre-configured build system and you can get started immediately with your plugin development. Also, it is easily customizable that allows you to add or remove any tools or setup. The development setup will include the boilerplate project for the jQuery plugin development, pre-configured gulp tasks for JavaScript transpile, CSS/SCSS building, test/lint scripts, hot loading, example page, readme, etc.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![Build Status](https://travis-ci.org/techlab/create-jquery-plugin.svg?branch=master)](https://travis-ci.org/techlab/create-jquery-plugin)

[![npm version](https://badge.fury.io/js/create-jquery-plugin.svg)](https://www.npmjs.com/package/create-jquery-plugin)

[![Npm Downloads](https://badgen.net/npm/dm/create-jquery-plugin?icon=npm)](https://www.npmjs.com/package/create-jquery-plugin)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/create-jquery-plugin/master/LICENSE)

[![GitHub Repo](https://badgen.net/badge/icon/create-jquery-plugin?icon=github&label=&color=0da4d3)](https://github.com/techlab/create-jquery-plugin)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## Usage

The command will walk you through a few simple prompts and creates a ready-to-start local development setup for your new jQuery plugin.

```bash
npx create-jquery-plugin
```

Or, fast track with default settings, just pass your plugin name.

```bash
npx create-jquery-plugin jquery-my-plugin
```

This will create a directory with your plugin name and with all the tools installed.

## Features

- Easy-to-use CLI
- CSS and SCSS templates
- Creates ready-to-start local development environment
- Unit testing with [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/)

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

## Acknowledgements

Grateful to the authors and contributors of [create-react-library](https://www.npmjs.com/package/create-react-library) and [create-react-app](https://github.com/facebook/create-react-app) from which this project is inspired. Thankful to the [jquery-plugin-boilerplate](https://github.com/techlab/jquery-plugin-boilerplate) for providing the project templates. Also, thanks to the authors and contributors of the amazing Node.js tools used in this project.

## License

Released under the terms of the [MIT License](https://github.com/techlab/create-jquery-plugin/blob/master/LICENSE). You are free to use on both personal and commercial environment as long as the copyright header is left intact.