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

/** A type-alias for a {@link BigInt}
 * in a {@link String} template
 *
 * @see Template
 * @see NumericTemplate
 */
export type BigIntTemplate<T extends bigint = bigint, > = `${T}`

/**
 * A type-alias for a {@link BigInt}
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrNumeric
 * @see TemplateOrBigIntOrObject
 */
export type TemplateOrBigInt<T extends bigint = bigint, > = | T | `${T}`

/**
 * A type-alias for a {@link BigInt}
 * as a primitive or an object
 *
 * @see NumericOrObject
 * @see TemplateOrBigIntOrObject
 */
export type BigIntOrObject<T extends bigint = bigint, > = | T | BigInt

/**
 * A type-alias for a {@link BigInt}
 * as a primitive, an object or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrBigInt
 * @see BigIntOrObject
 * @see TemplateOrNumericOrObject
 */
export type TemplateOrBigIntOrObject<T extends bigint = bigint, > = | T | BigInt | `${T}`
