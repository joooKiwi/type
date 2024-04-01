/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * A type-alias for <b>1</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see MinusOneNumber
 * @see MinusOneBigInt
 */
export type One<T extends | 1 | 1n = | 1 | 1n, > = T
/**
 * A type-alias for the {@link Number} <b>1</b>
 * as a primitive
 *
 * @see One
 */
export type OneNumber<T extends 1 = 1, > = T
/**
 * A type-alias for the {@link BigInt} <b>1</b>
 * as a primitive
 *
 * @see One
 */
export type OneBigInt<T extends 1n = 1n, > = T

/**
 * A type-alias for <b>1</b> (as a {@link Number} or a {@link BigInt})
 * in a {@link String} template
 *
 * @see One
 * @see OneNumber
 * @see OneBigInt
 * @see Template
 * @see TemplateOrOne
 * @see TemplateOrOneNumber
 * @see TemplateOrOneBigInt
 * @see NumberTemplate
 * @see BigIntTemplate
 * @see NumericTemplate
 */
export type OneTemplate<T extends | 1 | 1n = | 1 | 1n, > = `${T}`

/**
 * A type-alias for <b>1</b> (as a {@link Number} or a {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see One
 * @see OneNumber
 * @see OneBigInt
 * @see Template
 * @see OneTemplate
 * @see TemplateOrOneNumber
 * @see TemplateOrOneBigInt
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 * @see TemplateOrBigInt
 */
export type TemplateOrOne<T extends | 1 | 1n = | 1 | 1n, > = | T | `${T}`
/**
 * A type-alias for the {@link Number} <b>1</b>
 * as a primitive or in a {@link String} template
 *
 * @see One
 * @see OneBigInt
 * @see Template
 * @see OneTemplate
 * @see TemplateOrOne
 * @see TemplateOrNumeric
 * @see TemplateOrNumber
 */
export type TemplateOrOneNumber<T extends 1 = 1, > = | T | `${T}`
/**
 * A type-alias for the {@link BigInt} <b>1</b>
 * as a primitive or in a {@link String} template
 *
 * @see One
 * @see OneBigInt
 * @see Template
 * @see OneTemplate
 * @see TemplateOrOne
 * @see TemplateOrNumeric
 * @see TemplateOrBigInt
 */
export type TemplateOrOneBigInt<T extends 1n = 1n, > = | T | `${T}`