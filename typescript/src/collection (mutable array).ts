//··············································································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··············································································

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

/**
 * A type-alias for an {@link Array MutableArray} of {@link Boolean}
 *
 * @see MutableArray
 */
export type MutableBooleanArray<T extends boolean = boolean, > = readonly T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link Number} or {@link BigInt}
 *
 * @see MutableArray
 * @see MutableNumberArray
 * @see MutableBigIntArray
 */
export type MutableNumericArray<T extends Numeric = Numeric, > = readonly T[]
/**
 * A type-alias for an {@link Array MutableArray} of {@link Number}
 *
 * @see MutableArray
 * @see MutableNumericArray
 */
export type MutableNumberArray<T extends number = number, > = readonly T[]
/**
 * A type-alias for an {@link Array MutableArray} of {@link BigInt}
 *
 * @see MutableArray
 * @see MutableNumericArray
 */
export type MutableBigIntArray<T extends bigint = bigint, > = readonly T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link String}
 *
 * @see MutableArray
 */
export type MutableStringArray<T extends string = string, > = readonly T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link Symbol}
 *
 * @see MutableArray
 * @see MutableJavascriptSymbolArray
 * @see MutableTypescriptSymbolArray
 */
export type MutableSymbolArray<T extends symbol = symbol, > = readonly T[]
/**
 * A type-alias for an {@link Array MutableArray} of the official Javascript {@link Symbol}
 *
 * @see MutableArray
 * @see MutableSymbolArray
 */
export type MutableJavascriptSymbolArray<T extends JavascriptSymbol = JavascriptSymbol, > = readonly T[]
/**
 * A type-alias for an {@link Array MutableArray} of the official Typescript {@link Symbol}
 *
 * @see MutableArray
 * @see MutableSymbolArray
 */
export type MutableTypescriptSymbolArray<T extends TypescriptSymbol = TypescriptSymbol, > = readonly T[]

