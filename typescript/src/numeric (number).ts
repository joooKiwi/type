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
 * A type-alias for a {@link Number}
 * in a {@link String} template
 *
 * @see Template
 * @see NumericTemplate
 */
export type NumberTemplate<T extends number = number, > = `${T}`

/**
 * A type-alias for a {@link Number}
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrNumeric
 * @see TemplateOrNumberOrObject
 */
export type TemplateOrNumber<T extends number = number, > = | T | `${T}`

/**
 * A type-alias for a {@link Number}
 * as a primitive or an object
 *
 * @see NumericOrObject
 * @see TemplateOrNumberOrObject
 */
export type NumberOrObject<T extends number = number, > = | T | Number

/**
 * A type-alias for a {@link Number}
 * as a primitive, an object or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrNumber
 * @see NumberOrObject
 * @see TemplateOrNumericOrObject
 */
export type TemplateOrNumberOrObject<T extends number = number, > = | T | Number | `${T}`
