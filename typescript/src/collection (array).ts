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
 * A type-alias for an {@link ReadonlyArray Array} of {@link Boolean}
 *
 * @see import('collection').Array
 */
export type BooleanArray<T extends boolean = boolean, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see NumberArray
 * @see BigIntArray
 */
export type NumericArray<T extends Numeric = Numeric, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Number}
 *
 * @see import('collection').Array
 * @see NumericArray
 */
export type NumberArray<T extends number = number, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link BigInt}
 *
 * @see import('collection').Array
 * @see NumericArray
 */
export type BigIntArray<T extends bigint = bigint, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link String}
 *
 * @see import('collection').Array
 */
export type StringArray<T extends string = string, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Symbol}
 *
 * @see import('collection').Array
 * @see JavascriptSymbolArray
 * @see TypescriptSymbolArray
 */
export type SymbolArray<T extends symbol = symbol, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of the official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see SymbolArray
 */
export type JavascriptSymbolArray<T extends JavascriptSymbol = JavascriptSymbol, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of the official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see SymbolArray
 */
export type TypescriptSymbolArray<T extends TypescriptSymbol = TypescriptSymbol, > = readonly T[]
