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

/**
 * A type-alias for an empty {@link ReadonlySet Set}
 *
 * @param T The {@link ReadonlySet Set} type (<i><b>never</b> by default</i>)
 * @see EmptyMutableSet
 */
export type EmptySet<T = never, > = ReadonlySet<T>
/**
 * A type-alias for an empty {@link Set MutableSet}
 *
 * @param T The {@link Set MutableSet} type (<i><b>never</b> by default</i>)
 * @see EmptySet
 */
export type EmptyMutableSet<T = never, > = Set<T>

/**
 * A type-alias for an empty {@link WeakSet}
 *
 * @param T The {@link WeakSet} type (<i><b>never</b> by default</i>)
 * @see EmptyMutableWeakSet
 */
export type EmptyWeakSet<T extends WeakKey = never, > = Readonly<WeakSet<T>>
/**
 * A type-alias for an empty {@link WeakSet MutableWeakSet}
 *
 * @param T The {@link WeakSet MutableWeakSet} type (<i><b>never</b> by default</i>)
 * @see EmptyWeakSet
 */
export type EmptyMutableWeakSet<T extends WeakKey = never, > = WeakSet<T>

/**
 * A type-alias for an empty {@link ReadonlyMap Map}
 *
 * @param K The {@link ReadonlyMap Map} key type (<i><b>never</b> by default</i>)
 * @param V The {@link ReadonlyMap Map} value type (<i><b>never</b> by default</i>)
 * @see EmptyMutableMap
 */
export type EmptyMap<K = never, V = never, > = ReadonlyMap<K, V>
/**
 * A type-alias for an empty {@link Map MutableMap}
 *
 * @param K The {@link Map MutableMap} key type (<i><b>never</b> by default</i>)
 * @param V The {@link Map MutableMap} value type (<i><b>never</b> by default</i>)
 * @see EmptyMap
 */
export type EmptyMutableMap<K = never, V = never, > = Map<K, V>

/**
 * A type-alias for an empty {@link WeakMap}
 *
 * @param K The {@link WeakMap} key type (<i><b>never</b> by default</i>)
 * @param V The {@link WeakMap} value type (<i><b>never</b> by default</i>)
 * @see EmptyMutableWeakMap
 */
export type EmptyWeakMap<K extends WeakKey = never, V = never, > = Readonly<WeakMap<K, V>>
/**
 * A type-alias for an empty {@link WeakMap MutableWeakMap}
 *
 * @param K The {@link WeakMap MutableWeakMap} key type (<i><b>never</b> by default</i>)
 * @param V The {@link WeakMap MutableWeakMap} value type (<i><b>never</b> by default</i>)
 * @see EmptyWeakMap
 */
export type EmptyMutableWeakMap<K extends WeakKey = never, V = never, > = WeakMap<K, V>

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
