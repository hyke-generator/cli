# Hike

[![CI Status](https://api.travis-ci.org/lklacar/hike.svg?branch=master)](https://api.travis-ci.org/lklacar/hike.svg?branch=master)
[![dependencies Status](https://david-dm.org/lklacar/hike/status.svg)](https://david-dm.org/lklacar/hike)
[![npm version](https://badge.fury.io/js/hike-cli.svg)](https://badge.fury.io/js/hike-cli)
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