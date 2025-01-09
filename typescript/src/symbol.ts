//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {PossibleJavascriptSymbolName, PossibleTypescriptSymbolName} from "./string"

/** A type-alias for an official Javascript {@link Symbol} as a primitive */
export type JavascriptSymbol<T extends PossibleJavascriptSymbolName = PossibleJavascriptSymbolName, > = typeof Symbol[T]
/** A type-alias for an official Typescript {@link Symbol} as a primitive */
export type TypescriptSymbol<T extends PossibleTypescriptSymbolName = PossibleTypescriptSymbolName, > = typeof Symbol[T]

/**
 * A type-alias for a {@link Symbol}
 * as a primitive or an object
 *
 * @see JavascriptSymbol
 * @see TypescriptSymbol
 * @see JavascriptSymbolOrObject
 * @see TypescriptSymbolOrObject
 */
export type SymbolOrObject<T extends symbol = symbol, > = | T | Symbol
/**
 * A type-alias for an official Javascript {@link Symbol}
 * as a primitive or an object
 *
 * @see JavascriptSymbol
 * @see SymbolOrObject
 */
export type JavascriptSymbolOrObject<T extends JavascriptSymbol = JavascriptSymbol, > = | T | Symbol
/**
 * A type-alias for an official Typescript {@link Symbol}
 * as a primitive or an object
 *
 * @see TypescriptSymbol
 * @see SymbolOrObject
 */
export type TypescriptSymbolOrObject<T extends TypescriptSymbol = TypescriptSymbol, > = | T | Symbol
