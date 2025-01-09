//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

/**
 * A type-alias for <b>0</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive
 *
 * @see ZeroNumber
 * @see ZeroBigInt
 */
export type Zero<T extends | 0 | 0n = | 0 | 0n, > = T
/**
 * A type-alias for the {@link Number} <b>0</b>
 * as a primitive
 *
 * @see Zero
 */
export type ZeroNumber<T extends 0 = 0, > = T
/**
 * A type-alias for the {@link BigInt} <b>0</b>
 * as a primitive
 *
 * @see Zero
 */
export type ZeroBigInt<T extends 0n = 0n, > = T

/**
 * A type-alias for <b>0</b> (as a {@link Number} or a {@link BigInt})
 * in a {@link String} template
 *
 * @see Template
 * @see TemplateOrZero
 * @see TemplateOrZeroNumber
 * @see TemplateOrZeroBigInt
 * @see NumericTemplate
 * @see NumberTemplate
 * @see BigIntTemplate
 */
export type ZeroTemplate<T extends | 0 | 0n = | 0 | 0n, > = `${T}`

/**
 * A type-alias for <b>0</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see ZeroTemplate
 * @see TemplateOrZeroNumber
 * @see TemplateOrZeroBigInt
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 * @see TemplateOrBigInt
 */
export type TemplateOrZero<T extends | 0 | 0n = | 0 | 0n, > = | T | `${T}`
/**
 * A type-alias for the {@link Number} <b>0</b>
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see ZeroTemplate
 * @see TemplateOrZero
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 */
export type TemplateOrZeroNumber<T extends 0 = 0, > = | T | `${T}`
/**
 * A type-alias for the {@link BigInt} <b>0</b>
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see ZeroTemplate
 * @see TemplateOrZero
 * @see TemplateOrNumeric
 * @see TemplateOrBigInt
 */
export type TemplateOrZeroBigInt<T extends 0n = 0n, > = | T | `${T}`
