/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/** A type-alias for a {@link Number} or a {@link BigInt} as a primitive */
export type Numeric<T extends | number | bigint = | number | bigint, > = T

/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * in a {@link String} template
 *
 * @see Template
 * @see NumberTemplate
 * @see BigIntTemplate
 */
export type NumericTemplate<T extends Numeric = Numeric, > = `${T}`

/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrNumber
 * @see TemplateOrBigInt
 * @see TemplateOrNumericOrObject
 */
export type TemplateOrNumeric<T extends Numeric = Numeric, > = | T | `${T}`

/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see NumberOrObject
 * @see BigIntOrObject
 * @see TemplateOrNumericOrObject
 */
export type NumericOrObject<T extends Numeric = Numeric, > = | T | Number | BigInt

/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive, an object or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrNumberOrObject
 * @see TemplateOrBigIntOrObject
 * @see TemplateOrNumeric
 */
export type TemplateOrNumericOrObject<T extends Numeric = Numeric, > = | T | Number | BigInt | `${T}`
