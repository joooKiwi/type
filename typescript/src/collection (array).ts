//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').BooleanArrayOf1
 * @see import('collection (array of)').BooleanArrayOf2
 * @see import('collection (array of)').BooleanArrayOf3
 * @see import('collection (array of)').BooleanArrayOf4
 * @see import('collection (array of)').BooleanArrayOf5
 * @see import('collection (array of)').BooleanArrayOf6
 * @see import('collection (array of)').BooleanArrayOf7
 * @see import('collection (array of)').BooleanArrayOf8
 * @see import('collection (array of)').BooleanArrayOf9
 * @see import('collection (array of)').BooleanArrayOf10
 */
export type BooleanArray<T extends boolean = boolean, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').NumericArrayOf1
 * @see import('collection (array of)').NumericArrayOf2
 * @see import('collection (array of)').NumericArrayOf3
 * @see import('collection (array of)').NumericArrayOf4
 * @see import('collection (array of)').NumericArrayOf5
 * @see import('collection (array of)').NumericArrayOf6
 * @see import('collection (array of)').NumericArrayOf7
 * @see import('collection (array of)').NumericArrayOf8
 * @see import('collection (array of)').NumericArrayOf9
 * @see import('collection (array of)').NumericArrayOf10
 * @see NumberArray
 * @see BigIntArray
 */
export type NumericArray<T extends Numeric = Numeric, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').NumberArrayOf1
 * @see import('collection (array of)').NumberArrayOf2
 * @see import('collection (array of)').NumberArrayOf3
 * @see import('collection (array of)').NumberArrayOf4
 * @see import('collection (array of)').NumberArrayOf5
 * @see import('collection (array of)').NumberArrayOf6
 * @see import('collection (array of)').NumberArrayOf7
 * @see import('collection (array of)').NumberArrayOf8
 * @see import('collection (array of)').NumberArrayOf9
 * @see import('collection (array of)').NumberArrayOf10
 * @see NumericArray
 */
export type NumberArray<T extends number = number, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').BigIntArrayOf1
 * @see import('collection (array of)').BigIntArrayOf2
 * @see import('collection (array of)').BigIntArrayOf3
 * @see import('collection (array of)').BigIntArrayOf4
 * @see import('collection (array of)').BigIntArrayOf5
 * @see import('collection (array of)').BigIntArrayOf6
 * @see import('collection (array of)').BigIntArrayOf7
 * @see import('collection (array of)').BigIntArrayOf8
 * @see import('collection (array of)').BigIntArrayOf9
 * @see import('collection (array of)').BigIntArrayOf10
 * @see NumericArray
 */
export type BigIntArray<T extends bigint = bigint, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link String}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').StringArrayOf1
 * @see import('collection (array of)').StringArrayOf2
 * @see import('collection (array of)').StringArrayOf3
 * @see import('collection (array of)').StringArrayOf4
 * @see import('collection (array of)').StringArrayOf5
 * @see import('collection (array of)').StringArrayOf6
 * @see import('collection (array of)').StringArrayOf7
 * @see import('collection (array of)').StringArrayOf8
 * @see import('collection (array of)').StringArrayOf9
 * @see import('collection (array of)').StringArrayOf10
 */
export type StringArray<T extends string = string, > = readonly T[]

/**
 * A type-alias for an {@link ReadonlyArray Array} of {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').SymbolArrayOf1
 * @see import('collection (array of)').SymbolArrayOf2
 * @see import('collection (array of)').SymbolArrayOf3
 * @see import('collection (array of)').SymbolArrayOf4
 * @see import('collection (array of)').SymbolArrayOf5
 * @see import('collection (array of)').SymbolArrayOf6
 * @see import('collection (array of)').SymbolArrayOf7
 * @see import('collection (array of)').SymbolArrayOf8
 * @see import('collection (array of)').SymbolArrayOf9
 * @see import('collection (array of)').SymbolArrayOf10
 * @see JavascriptSymbolArray
 * @see TypescriptSymbolArray
 */
export type SymbolArray<T extends symbol = symbol, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of the official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').JavascriptSymbolArrayOf1
 * @see import('collection (array of)').JavascriptSymbolArrayOf2
 * @see import('collection (array of)').JavascriptSymbolArrayOf3
 * @see import('collection (array of)').JavascriptSymbolArrayOf4
 * @see import('collection (array of)').JavascriptSymbolArrayOf5
 * @see import('collection (array of)').JavascriptSymbolArrayOf6
 * @see import('collection (array of)').JavascriptSymbolArrayOf7
 * @see import('collection (array of)').JavascriptSymbolArrayOf8
 * @see import('collection (array of)').JavascriptSymbolArrayOf9
 * @see import('collection (array of)').JavascriptSymbolArrayOf10
 * @see SymbolArray
 */
export type JavascriptSymbolArray<T extends JavascriptSymbol = JavascriptSymbol, > = readonly T[]
/**
 * A type-alias for an {@link ReadonlyArray Array} of the official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array of)').TypescriptSymbolArrayOf1
 * @see import('collection (array of)').TypescriptSymbolArrayOf2
 * @see import('collection (array of)').TypescriptSymbolArrayOf3
 * @see import('collection (array of)').TypescriptSymbolArrayOf4
 * @see import('collection (array of)').TypescriptSymbolArrayOf5
 * @see import('collection (array of)').TypescriptSymbolArrayOf6
 * @see import('collection (array of)').TypescriptSymbolArrayOf7
 * @see import('collection (array of)').TypescriptSymbolArrayOf8
 * @see import('collection (array of)').TypescriptSymbolArrayOf9
 * @see import('collection (array of)').TypescriptSymbolArrayOf10
 * @see SymbolArray
 */
export type TypescriptSymbolArray<T extends TypescriptSymbol = TypescriptSymbol, > = readonly T[]
