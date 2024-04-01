/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * A type-alias for a value
 * ({@link String}, {@link Boolean} {@link Number}, {@link BigInt}, <b>null</b> or <b>undefined</b>)
 * in a {@link String} template
 */
export type Template<T extends | string | boolean | number | bigint | null | undefined = | string | boolean | number | bigint | null | undefined, > = `${T}`
/** A type-alias for a {@link String} as a primitive or an object */
export type StringOrObject<T extends string = string, > = | T | String

/**
 * The possible hint received from javascript interpolation & conversion
 *
 * @see Symbol.toPrimitive
 */
export type PossiblePrimitiveHint = "string" | "number" | "default"
/**
 * The possible edge case {@link Number} to be converted to a {@link String}
 *
 * @see NaN
 * @see Infinity
 * @see Number.NaN
 * @see Number.POSITIVE_INFINITY
 * @see Number.NEGATIVE_INFINITY
 */
export type PossibleEdgeCaseNumericName = | "NaN" | "Infinity" | "-Infinity"

/**
 *
 *
 * @see PossibleTypescriptSymbolName
 */
export type PossibleJavascriptSymbolName = | "asyncIterator" | "iterator"
                                           | "hasInstance" | "isConcatSpreadable"
                                           | "match" | "matchAll"
                                           | "replace" | "search" | "split"
                                           | "species"
                                           | "toPrimitive" | "toStringTag"
                                           | "unscopables"

/**
 *
 *
 * @see PossibleJavascriptSymbolName
 */
export type PossibleTypescriptSymbolName = | "asyncIterator" | "iterator"
                                           | "asyncDispose" | "dispose"
                                           | "hasInstance" | "isConcatSpreadable"
                                           | "match" | "matchAll"
                                           | "replace" | "search" | "split"
                                           | "metadata" | "species"
                                           | "toPrimitive" | "toStringTag"
                                           | "unscopables"
