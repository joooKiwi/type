/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

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

