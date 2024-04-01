/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * A type-alias for a {@link Boolean}
 * in a {@link String} template
 *
 * @see Template
 * @see TrueTemplate
 * @see FalseTemplate
 */
export type BooleanTemplate<T extends boolean = boolean, > = `${T}`

/**
 * A type-alias for a {@link Boolean}
 * as a primitive or in a {@link String} template
 *
 * @see Template
 * @see TemplateOrTrue
 * @see TemplateOrFalse
 * @see TemplateOrBooleanOrObject
 */
export type TemplateOrBoolean<T extends boolean = boolean, > = | T | `${T}`

/**
 * A type-alias for a {@link Boolean}
 * as a primitive or an object
 *
 * @see TemplateOrBooleanOrObject
 */
export type BooleanOrObject<T extends boolean = boolean, > = | T | Boolean

/**
 * A type-alias for a {@link Boolean}
 * as a primitive, an object or in a {@link String} template
 *
 * @see Template
 * @see BooleanOrObject
 * @see TemplateOrBoolean
 */
export type TemplateOrBooleanOrObject<T extends boolean = boolean, > = | T | `${T}` | Boolean
