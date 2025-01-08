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
 * A type-alias for <b>-1</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive
 *
 * @see MinusOneNumber
 * @see MinusOneBigInt
 */
export type MinusOne<T extends | -1 | -1n = | -1 | -1n, > = T
/**
 * A type-alias for the {@link Number} <b>-1</b>
 * as a primitive
 *
 * @see MinusOne
 */
export type MinusOneNumber<T extends -1 = -1, > = T
/**
 * A type-alias for the {@link BigInt} <b>-1</b>
 * as a primitive
 *
 * @see MinusOne
 */
export type MinusOneBigInt<T extends -1n = -1n, > = T

/**
 * A type-alias for <b>-1</b> (as a {@link Number} or a {@link BigInt})
 * in a {@link String} template
 *
 * @see Template
 * @see TemplateOrMinusOne
 * @see NumericTemplate
 * @see NumberTemplate
 * @see BigIntTemplate
 */
export type MinusOneTemplate<T extends | -1 | -1n = | -1 | -1n, > = `${T}`

/**
 * A type-alias for <b>-1</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see MinusOneTemplate
 * @see TemplateOrMinusOneNumber
 * @see TemplateOrMinusOneBigInt
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 * @see TemplateOrBigInt
 */
export type TemplateOrMinusOne<T extends | -1 | -1n = | -1 | -1n, > = | T | `${T}`
/**
 * A type-alias for the {@link Number} <b>-1</b>
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see MinusOneTemplate
 * @see TemplateOrMinusOne
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 */
export type TemplateOrMinusOneNumber<T extends -1 = -1, > = | T | `${T}`
/**
 * A type-alias for the {@link BigInt} <b>-1</b>
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see MinusOneTemplate
 * @see TemplateOrMinusOne
 * @see TemplateOrNumeric
 * @see TemplateOrBigInt
 */
export type TemplateOrMinusOneBigInt<T extends -1n = -1n, > = | T | `${T}`
