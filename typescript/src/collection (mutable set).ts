/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Boolean}
 *
 * @see MutableSet
 */
export type MutableBooleanSet<T extends boolean = boolean, > = Set<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Number} or {@link BigInt}
 *
 * @see MutableSet
 * @see MutableNumberSet
 * @see MutableBigIntSet
 */
export type MutableNumericSet<T extends Numeric = Numeric, > = Set<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Number}
 *
 * @see MutableSet
 * @see MutableNumericSet
 */
export type MutableNumberSet<T extends number = number, > = Set<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of {@link BigInt}
 *
 * @see MutableSet
 * @see MutableNumericSet
 */
export type MutableBigIntSet<T extends bigint = bigint, > = Set<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link String}
 *
 * @see MutableSet
 */
export type MutableStringSet<T extends string = string, > = Set<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Symbol}
 *
 * @see MutableSet
 * @see MutableJavascriptSymbolSet
 * @see MutableTypescriptSymbolSet
 */
export type MutableSymbolSet<T extends symbol = symbol, > = Set<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of the official Javascript {@link Symbol}
 *
 * @see MutableSet
 * @see MutableSymbolSet
 */
export type MutableJavascriptSymbolSet<T extends JavascriptSymbol = JavascriptSymbol, > = Set<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of the official Typescript {@link Symbol}
 *
 * @see MutableSet
 * @see MutableSymbolSet
 */
export type MutableTypescriptSymbolSet<T extends TypescriptSymbol = TypescriptSymbol, > = Set<T>
