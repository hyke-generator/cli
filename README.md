# Hike

[![CI Status](https://api.travis-ci.org/hyke-generator/cli.svg?branch=master)](https://api.travis-ci.org/hyke-generator/cli.svg?branch=master)
[![dependencies Status](https://david-dm.org/hyke-generator/hike/status.svg)](https://david-dm.org/hyke-generator/hike/status.svg)
[![npm version](https://badge.fury.io/js/%40hyke%2Fcli.svg)](https://badge.fury.io/js/%40hyke%2Fcli.svg)
## Usage

- Generate new application
```bash
hike new ExampleApplication
```

- Help
```bash
hike help

hike <command>

Commands:
  hike new <AppName>              Generate new application          [aliases: n]
  hike stateless <ComponentName>  Add new stateless component      [aliases: sl]
  hike stateful <ComponentName>   Add new stateful component       [aliases: sf]
  hike action  <ActionName>       Add new action                    [aliases: a]
  hike screen <ScreenName>        Add new scree                     [aliases: s]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```