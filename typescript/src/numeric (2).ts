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

/**
 * A type-alias for <b>2</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive
 *
 * @see TwoNumber
 * @see TwoBigInt
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
 * @see Template
 * @see TwoTemplate
 * @see TemplateOrTwo
 * @see TemplateOrBigInt
 */
export type TemplateOrTwoBigInt<T extends 2n = 2n, > = | T | `${T}`
