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
 * A type-alias for an {@link Array MutableArray} of {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableBooleanArrayOf1
 * @see import('collection (mutable array of)').MutableBooleanArrayOf2
 * @see import('collection (mutable array of)').MutableBooleanArrayOf3
 * @see import('collection (mutable array of)').MutableBooleanArrayOf4
 * @see import('collection (mutable array of)').MutableBooleanArrayOf5
 * @see import('collection (mutable array of)').MutableBooleanArrayOf6
 * @see import('collection (mutable array of)').MutableBooleanArrayOf7
 * @see import('collection (mutable array of)').MutableBooleanArrayOf8
 * @see import('collection (mutable array of)').MutableBooleanArrayOf9
 * @see import('collection (mutable array of)').MutableBooleanArrayOf10
 */
export type MutableBooleanArray<T extends boolean = boolean, > = T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableNumericArrayOf1
 * @see import('collection (mutable array of)').MutableNumericArrayOf2
 * @see import('collection (mutable array of)').MutableNumericArrayOf3
 * @see import('collection (mutable array of)').MutableNumericArrayOf4
 * @see import('collection (mutable array of)').MutableNumericArrayOf5
 * @see import('collection (mutable array of)').MutableNumericArrayOf6
 * @see import('collection (mutable array of)').MutableNumericArrayOf7
 * @see import('collection (mutable array of)').MutableNumericArrayOf8
 * @see import('collection (mutable array of)').MutableNumericArrayOf9
 * @see import('collection (mutable array of)').MutableNumericArrayOf10
 * @see MutableNumberArray
 * @see MutableBigIntArray
 */
export type MutableNumericArray<T extends Numeric = Numeric, > = T[]
/**
 * A type-alias for an {@link Array MutableArray} of {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableNumberArrayOf1
 * @see import('collection (mutable array of)').MutableNumberArrayOf2
 * @see import('collection (mutable array of)').MutableNumberArrayOf3
 * @see import('collection (mutable array of)').MutableNumberArrayOf4
 * @see import('collection (mutable array of)').MutableNumberArrayOf5
 * @see import('collection (mutable array of)').MutableNumberArrayOf6
 * @see import('collection (mutable array of)').MutableNumberArrayOf7
 * @see import('collection (mutable array of)').MutableNumberArrayOf8
 * @see import('collection (mutable array of)').MutableNumberArrayOf9
 * @see import('collection (mutable array of)').MutableNumberArrayOf10
 * @see MutableNumericArray
 */
export type MutableNumberArray<T extends number = number, > = T[]
/**
 * A type-alias for an {@link Array MutableArray} of {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableBigIntArrayOf1
 * @see import('collection (mutable array of)').MutableBigIntArrayOf2
 * @see import('collection (mutable array of)').MutableBigIntArrayOf3
 * @see import('collection (mutable array of)').MutableBigIntArrayOf4
 * @see import('collection (mutable array of)').MutableBigIntArrayOf5
 * @see import('collection (mutable array of)').MutableBigIntArrayOf6
 * @see import('collection (mutable array of)').MutableBigIntArrayOf7
 * @see import('collection (mutable array of)').MutableBigIntArrayOf8
 * @see import('collection (mutable array of)').MutableBigIntArrayOf9
 * @see import('collection (mutable array of)').MutableBigIntArrayOf10
 * @see MutableNumericArray
 */
export type MutableBigIntArray<T extends bigint = bigint, > = T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link String}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableStringArrayOf1
 * @see import('collection (mutable array of)').MutableStringArrayOf2
 * @see import('collection (mutable array of)').MutableStringArrayOf3
 * @see import('collection (mutable array of)').MutableStringArrayOf4
 * @see import('collection (mutable array of)').MutableStringArrayOf5
 * @see import('collection (mutable array of)').MutableStringArrayOf6
 * @see import('collection (mutable array of)').MutableStringArrayOf7
 * @see import('collection (mutable array of)').MutableStringArrayOf8
 * @see import('collection (mutable array of)').MutableStringArrayOf9
 * @see import('collection (mutable array of)').MutableStringArrayOf10
 */
export type MutableStringArray<T extends string = string, > = T[]

/**
 * A type-alias for an {@link Array MutableArray} of {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableSymbolArrayOf1
 * @see import('collection (mutable array of)').MutableSymbolArrayOf2
 * @see import('collection (mutable array of)').MutableSymbolArrayOf3
 * @see import('collection (mutable array of)').MutableSymbolArrayOf4
 * @see import('collection (mutable array of)').MutableSymbolArrayOf5
 * @see import('collection (mutable array of)').MutableSymbolArrayOf6
 * @see import('collection (mutable array of)').MutableSymbolArrayOf7
 * @see import('collection (mutable array of)').MutableSymbolArrayOf8
 * @see import('collection (mutable array of)').MutableSymbolArrayOf9
 * @see import('collection (mutable array of)').MutableSymbolArrayOf10
 * @see MutableJavascriptSymbolArray
 * @see MutableTypescriptSymbolArray
 */
export type MutableSymbolArray<T extends symbol = symbol, > = T[]
/**
 * A type-alias for an {@link Array MutableArray} of the official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf1
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf2
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf3
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf4
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf5
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf6
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf7
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf8
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf9
 * @see import('collection (mutable array of)').MutableJavascriptSymbolArrayOf10
 * @see MutableSymbolArray
 */
export type MutableJavascriptSymbolArray<T extends JavascriptSymbol = JavascriptSymbol, > = T[]
/**
 * A type-alias for an {@link Array MutableArray} of the official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf1
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf2
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf3
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf4
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf5
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf6
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf7
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf8
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf9
 * @see import('collection (mutable array of)').MutableTypescriptSymbolArrayOf10
 * @see MutableSymbolArray
 */
export type MutableTypescriptSymbolArray<T extends TypescriptSymbol = TypescriptSymbol, > = T[]

