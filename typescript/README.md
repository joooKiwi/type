# Types (javascript version)
[![downloads](https://img.shields.io/npm/dt/@joookiwi/type.svg)](https://npm-stat.com/charts.html?package=@joookiwi/type)

## Table of content
* [Installation](#installation)
* [Usage](#usage)
* [Chart](#chart)
* [Combination](#combination)
* [Contribution](#contribution)

## Installation
```
npm install @joookiwi/type
npm i @joookiwi/type

npm install --save @joookiwi/type
npm i -S @joookiwi/type

npm install --save-dev @joookiwi/type
npm i -D @joookiwi/type
```

## Usage

The usage of the types is mostly for Typescript only.
But if it can be used in the Javascript documentation if needed.

It can be used directly without an argument or with a specialized argument.

```typescript
import type {Nullable, NullOrString, UndefinedOrNumeric, Template} from "@joookiwi/type"

type Correct1 = Nullable<| 'a' | 2 | false> // = 'a' | 2 | false | null | undefined
type Incorrect1 = Nullable                  // The argument is required. (Just like NullOr or UndefinedOr)

type Correct2a = NullOrString      // = string | null
type Correct2b = NullOrString<'a'> // = 'a'| null
type Incorrect2 = NullOrString<2>  // It can only receive a string as an argument

type Correct3a = UndefinedOrNumeric           // = number | bigint | undefined
type Correct3b = UndefinedOrNumeric<2>        // = 2 | undefined
type Correct3c = UndefinedOrNumeric<2n>       // = 2n | undefined
type Correct3c = UndefinedOrNumeric<| 2 | 2n> // = 2 | 2n | undefined
type Incorrect3 = UndefinedOrNumeric<boolean> // It can only receive a number or bigint as an argument

type Correct4a = Template          // = `${string | boolean | number | bigint | null | undefined}`
type Correct4b = Template<'a'>     // = 'a' (but is redontant, just 'a' should suffice)
type Correct4c = Template<2 | 3n>  // = '2' | '3'
type Incorrect4 = Template<symbol> // A symbol cannot be in a string template
```

## Chart

To be coherent across the different types,
a simplified chart of the types has been made on their associable values.

The only exception is the **null** and **undefined**.

|                                                                                                          | Nullable | String<br/>template | number<br/>value | bigint<br/>value | Object |
|----------------------------------------------------------------------------------------------------------|:--------:|:-------------------:|:----------------:|:----------------:|:------:|
| **null**                                                                                                 |          |         ✓*          |                  |                  |        |
| **undefined**                                                                                            |          |         ✓*          |                  |                  |        |
|                                                                                                          |          |                     |                  |                  |        |
| **string**                                                                                               |    ✓     |                     |                  |                  |   ✓    |
|                                                                                                          |          |                     |                  |                  |        |
| **boolean**                                                                                              |    ✓     |          ✓          |                  |                  |   ✓    |
| **true**                                                                                                 |    ✓     |          ✓          |                  |                  |        |
| **false**                                                                                                |    ✓     |          ✓          |                  |                  |        |
|                                                                                                          |          |                     |                  |                  |        |
| **numeric<br/>(number & bigint)**                                                                        |    ✓     |          ✓          |                  |                  |   ✓    |
| **number**                                                                                               |    ✓     |          ✓          |                  |                  |   ✓    |
| **bigint**                                                                                               |    ✓     |          ✓          |                  |                  |   ✓    |
| **-1**                                                                                                   |    ✓     |          ✓          |        ✓         |        ✓         |        |
| **0**                                                                                                    |    ✓     |          ✓          |        ✓         |        ✓         |        |
| **1**                                                                                                    |    ✓     |          ✓          |        ✓         |        ✓         |        |
| **2**                                                                                                    |    ✓     |          ✓          |        ✓         |        ✓         |        |
|                                                                                                          |          |                     |                  |                  |        |
| **symbol**                                                                                               |    ✓     |                     |                  |                  |   ✓    |
| **known [js](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol) symbol** |    ✓     |                     |                  |                  |        |
| **known [ts](https://www.typescriptlang.org/docs/handbook/symbols.html) symbol**                         |    ✓     |                     |                  |                  |        |
<small>*: In a template, but not with a mix of the values</small>

## Combination

Almost each value can be associated with each other,
but some defined values are not associated by design.
It is to give simplicity and not too many types.

|                                                                                                                                                                            | nullable | string | boolean | true<br/>false | numeric | number | bigint | -1 0<br/>1 2 | symbol | known [js](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol) / [ts](https://www.typescriptlang.org/docs/handbook/symbols.html) symbol |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------:|:------:|:-------:|:--------------:|:-------:|:------:|:-------|:------------:|:------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                                                                                                                               **nullable** |          |   ✓    |    ✓    |       ✓        |    ✓    |   ✓    | ✓      |      ✓       |   ✓    |                                                                                   ✓                                                                                    |
|                                                                                                                                                                 **string** |    ✓     |        |    ✓    |                |    ✓    |   ✓    | ✓      |              |   ✓    |                                                                                                                                                                        |
|                                                                                                                                                                **boolean** |    ✓     |   ✓    |         |                |    ✓    |   ✓    | ✓      |              |   ✓    |                                                                                                                                                                        |
|                                                                                                                                                         **true<br/>false** |    ✓     |        |         |                |         |        |        |              |        |                                                                                                                                                                        |
|                                                                                                                                                                **numeric** |    ✓     |   ✓    |    ✓    |                |         |   ✓    | ✓      |              |   ✓    |                                                                                                                                                                        |
|                                                                                                                                                                 **number** |    ✓     |   ✓    |    ✓    |                |    ✓    |        | ✓      |              |   ✓    |                                                                                                                                                                        |
|                                                                                                                                                                 **bigint** |    ✓     |   ✓    |    ✓    |                |    ✓    |   ✓    |        |              |   ✓    |                                                                                                                                                                        |
|                                                                                                                                                           **-1 0<br/>1 2** |    ✓     |        |         |                |         |        |        |              |        |                                                                                                                                                                        |
|                                                                                                                                                                 **symbol** |    ✓     |   ✓    |    ✓    |                |    ✓    |   ✓    | ✓      |              |        |                                                                                                                                                                        |
| **known [js](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol) / [ts](https://www.typescriptlang.org/docs/handbook/symbols.html) symbol** |    ✓     |        |         |                |         |        |        |              |        |                                                                                                                                                                        |

## Contribution
You can contribute to great simple packages.
All with similar behaviour, accessibility and usage (like Java, Kotlin, C# and PHP).
It can be done 2 different ways:
- [GitHub sponsor](https://github.com/sponsors/joooKiwi) or
- [!["Buy me a Coffee"](https://img.buymeacoffee.com/button-api/?&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/joookiwi)
