/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * A type-alias for <b>true</b> in a {@link String} template
 *
 * @see BooleanTemplate
 */
export type TrueTemplate<T extends true = true, > = `${T}`
/**
 * A type-alias for <b>false</b> in a {@link String} template
 *
 * @see BooleanTemplate
 */
export type FalseTemplate<T extends false = false, > = `${T}`
/**
 * A type-alias for a {@link Boolean} in a {@link String} template
 *
 * @see TrueTemplate
 * @see FalseTemplate
 */
export type BooleanTemplate<T extends boolean = boolean, > = `${T}`
