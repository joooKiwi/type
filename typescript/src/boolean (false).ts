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

/** A type-alias for the {@link Boolean} <b>false</b> as a primitive */
export type False<T extends false = false, > = T

/**
 * A type-alias for the {@link Boolean} <b>false</b>
 * in a {@link String} template
 *
 * @see Template
 * @see BooleanTemplate
 */
export type FalseTemplate<T extends false = false, > = `${T}`

/**
 * A type-alias for the {@link Boolean} <b>false</b>
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see FalseTemplate
 * @see FalseOrTemplateOrObject
 * @see TemplateOrBoolean
 */
export type TemplateOrFalse<T extends false = false, > = | T | `${T}`
