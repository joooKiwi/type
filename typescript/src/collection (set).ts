/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"
import type {Numeric}                            from "./numeric"

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Boolean}
 *
 * @see import('collection').Set
 */
export type BooleanSet<T extends boolean = boolean, > = ReadonlySet<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Number} or {@link BigInt}
 *
 * @see import('collection').Set
 * @see NumberSet
 * @see BigIntSet
 */
export type NumericSet<T extends Numeric = Numeric, > = ReadonlySet<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Number}
 *
 * @see import('collection').Set
 * @see NumericSet
 */
export type NumberSet<T extends number = number, > = ReadonlySet<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of {@link BigInt}
 *
 * @see import('collection').Set
 * @see NumericSet
 */
export type BigIntSet<T extends bigint = bigint, > = ReadonlySet<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link String}
 *
 * @see import('collection').Set
 */
export type StringSet<T extends string = string, > = ReadonlySet<T>

/**
 * A type-alias for an {@link ReadonlySet Set} of {@link Symbol}
 *
 * @see import('collection').Set
 * @see JavascriptSymbolSet
 * @see TypescriptSymbolSet
 */
export type SymbolSet<T extends symbol = symbol, > = ReadonlySet<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of the official Javascript {@link Symbol}
 *
 * @see import('collection').Set
 * @see SymbolSet
 */
export type JavascriptSymbolSet<T extends JavascriptSymbol = JavascriptSymbol, > = ReadonlySet<T>
/**
 * A type-alias for an {@link ReadonlySet Set} of the official Typescript {@link Symbol}
 *
 * @see import('collection').Set
 * @see SymbolSet
 */
export type TypescriptSymbolSet<T extends TypescriptSymbol = TypescriptSymbol, > = ReadonlySet<T>
