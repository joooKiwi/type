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

/** A type-alias for the {@link Boolean} <b>true</b> as a primitive */
export type True<T extends true = true, > = T

/**
 * A type-alias for the {@link Boolean} <b>true</b>
 * in a {@link String} template
 *
 * @see Template
 * @see BooleanTemplate
 */
export type TrueTemplate<T extends true = true, > = `${T}`

/**
 * A type-alias for the {@link Boolean} <b>true</b>
 * in a {@link String} template
 *
 * @see Template
 * @see TrueTemplate
 * @see TrueOrTemplateOrObject
 * @see TemplateOrBoolean
 */
export type TemplateOrTrue<T extends true = true, > = | T | `${T}`
