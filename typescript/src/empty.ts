/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

/** A type-alias for an empty {@link String} */
export type EmptyString = ""

/**
 * A type-alias for an empty {@link ReadonlyArray Array}
 *
 * @see EmptyMutableArray
 */
export type EmptyArray = readonly []
/**
 * A type-alias for an empty {@link Array MutableArray}
 *
 * @see EmptyArray
 */
export type EmptyMutableArray = []

/** A type-alias for an empty {@link ReadonlySet Set} */
export type EmptySet = ReadonlySet<never>

/** A type-alias for an empty {@link WeakSet} */
export type EmptyWeakSet = Readonly<WeakSet<WeakKey>>

/**
 * A type-alias for an empty {@link ReadonlyMap Map}
 *
 * @see EmptyMutableMap
 */
export type EmptyMap = ReadonlyMap<any, never>
/**
 * A type-alias for an empty {@link Map MutableMap}
 *
 * @see EmptyMap
 */
export type EmptyMutableMap = Map<any, never>

/** A type-alias for an empty {@link WeakMap} */
export type EmptyWeakMap = Readonly<WeakMap<WeakKey, never>>

/**
 * A type-alias for an empty {@link Object}
 *
 * @see EmptyMutableObject
 */
export type EmptyObject = Readonly<{}>
/**
 * A type-alias for an empty {@link Object} (that can be modified)
 *
 * @see EmptyObject
 */
export type EmptyMutableObject = {}
