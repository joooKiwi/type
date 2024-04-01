/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * A type-alias for <b>2</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see MinusTwoNumber
 * @see MinusTwoBigInt
 */
export type Two<T extends | 2 | 2n = | 2 | 2n, > = T
/**
 * A type-alias for the {@link Number} <b>2</b>
 * as a primitive
 *
 * @see Two
 */
export type TwoNumber<T extends 2 = 2, > = T
/**
 * A type-alias for the {@link BigInt} <b>2</b>
 * as a primitive
 *
 * @see Two
 */
export type TwoBigInt<T extends 2n = 2n, > = T

/**
 * A type-alias for <b>2</b> (as a {@link Number} or a {@link BigInt})
 * in a {@link String} template
 *
 * @see Two
 * @see TwoNumber
 * @see TwoBigInt
 * @see Template
 * @see TemplateOrTwo
 * @see NumberTemplate
 * @see BigIntTemplate
 * @see NumericTemplate
 */
export type TwoTemplate<T extends | 2 | 2n = | 2 | 2n, > = `${T}`

/**
 * A type-alias for <b>2</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see Two
 * @see TwoNumber
 * @see TwoBigInt
 * @see Template
 * @see TwoTemplate
 * @see TemplateOrTwoNumber
 * @see TemplateOrTwoBigInt
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 * @see TemplateOrBigInt
 */
export type TemplateOrTwo<T extends | 2 | 2n = | 2 | 2n, > = | T | `${T}`
/**
 * A type-alias for the {@link Number} <b>2</b>
 * as a primitive or in a {@link String} template
 *
 * @see Two
 * @see TwoNumber
 * @see Template
 * @see TwoTemplate
 * @see TemplateOrTwo
 * @see TemplateOrNumber
 */
export type TemplateOrTwoNumber<T extends 2 = 2, > = | T | `${T}`
/**
 * A type-alias for the {@link BigInt} <b>2</b>
 * as a primitive or in a {@link String} template
 *
 * @see Two
 * @see TwoBigInt
 * @see Template
 * @see TwoTemplate
 * @see TemplateOrTwo
 * @see TemplateOrBigInt
 */
export type TemplateOrTwoBigInt<T extends 2n = 2n, > = | T | `${T}`