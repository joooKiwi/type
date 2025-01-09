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

import type {UndefinedOr} from "./nullable"

/**
 * A type-alias for an {@link ReadonlyArray Array} of a value
 *
 * @see BooleanArray
 * @see NumericArray
 * @see NumberArray
 * @see BigIntArray
 * @see StringArray
 * @see SymbolArray
 * @see JavascriptSymbolArray
 * @see TypescriptSymbolArray
 */
export type Array<T, > = readonly T[]
/**
 * A type-alias for a {@link globalThis.Array MutableArray} of a value
 *
 * @see MutableBooleanArray
 * @see MutableNumericArray
 * @see MutableNumberArray
 * @see MutableBigIntArray
 * @see MutableStringArray
 * @see MutableSymbolArray
 * @see MutableJavascriptSymbolArray
 * @see MutableTypescriptSymbolArray
 */
export type MutableArray<T, > = T[]

/**
 * A type-alias for a {@link ReadonlySet Set} of a value
 *
 * @see BooleanSet
 * @see NumericSet
 * @see NumberSet
 * @see BigIntSet
 * @see StringSet
 * @see SymbolSet
 * @see JavascriptSymbolSet
 * @see TypescriptSymbolSet
 */
export type Set<T, > = ReadonlySet<T>
/**
 * A type-alias for a {@link globalThis.Set MutableSet} of a value
 *
 * @see MutableBooleanSet
 * @see MutableNumericSet
 * @see MutableNumberSet
 * @see MutableBigIntSet
 * @see MutableStringSet
 * @see MutableSymbolSet
 * @see MutableJavascriptSymbolSet
 * @see MutableTypescriptSymbolSet
 */
export type MutableSet<T, > = globalThis.Set<T>


/**
 * An interface declaration for a {@link globalThis.WeakSet WeakSet} of a value that is immutable.
 *
 * The collection is holding {@link Object} and {@link Symbol}
 * that is garbage-collectable.
 * An object may be present at one time and not at the other due to being garbage collected.
 *
 * @supportedBy Chrome 36, Chrome Android 36
 * @supportedBy Edge
 * @supportedBy Firefox 34
 * @supportedBy Opera 23
 * @supportedBy Safari 9, Safari iOS 9
 * @supportedBy Node.js 0.12.0
 * @supportedBy Deno
 * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
 * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
 */
export interface WeakSet<T extends WeakKey, > {

    /**
     * Indicate whenever the {@link value} exist or not in the current {@link WeakSet collection}
     *
     * @param value The value to test its presence
     * @return Returns `true` if it exists otherwise `false`.
     *         Always returns `false` if the {@link value} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 34
     * @supportedBy Opera 23
     * @supportedBy Safari 9, Safari iOS 9
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    has(value: T,): boolean

    /**
     * Give an output for the call {@link Object.toString.call} giving [object WeakSet] instead of the general [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: string

}

/**
 * An interface declaration for a {@link globalThis.WeakSet WeakSet} of a value that is mutable
 *
 * The collection is holding {@link Object} and {@link Symbol}
 * that is garbage-collectable.
 * An object may be present at one time and not at the other due to being garbage collected.
 *
 * @supportedBy Chrome 36, Chrome Android 36
 * @supportedBy Edge
 * @supportedBy Firefox 34
 * @supportedBy Opera 23
 * @supportedBy Safari 9, Safari iOS 9
 * @supportedBy Node.js 0.12.0
 * @supportedBy Deno
 * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
 * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
 */
export interface MutableWeakSet<T extends WeakKey, >
    extends WeakSet<T> {

    /**
     * Add a new {@link value} to the end of the current {@link MutableWeakSet collection}
     *
     * @param value The value to add
     * @return The current {@link MutableWeakSet} instance
     * @throws TypeError The {@link value} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 34
     * @supportedBy Opera 23
     * @supportedBy Safari 9, Safari iOS 9
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    add(value: T,): this

    /**
     * Remove a {@link value} (if it exists) in the current {@link MutableWeakSet collection}
     *
     * @param value The value to possibly remove
     * @return Returns `true` if the {@link value} has been removed successfully, otherwise `false`.
     *         Always returns `false` if the {@link value} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 34
     * @supportedBy Opera 23
     * @supportedBy Safari 9, Safari iOS 9
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    delete(value: T,): boolean

}


/**
 * A type-alias for a {@link ReadonlyMap Map} of a key and a value
 *
 * @see BooleanKeyMap
 * @see BooleanValueMap
 * @see BooleanBooleanMap
 * @see BooleanNumericMap
 * @see BooleanNumberMap
 * @see BooleanBigIntMap
 * @see BooleanStringMap
 * @see BooleanSymbolMap
 * @see BooleanJavascriptSymbolMap
 * @see BooleanTypescriptSymbolMap
 *
 * @see NumericKeyMap
 * @see NumericValueMap
 * @see NumericBooleanMap
 * @see NumericNumericMap
 * @see NumericNumberMap
 * @see NumericBigIntMap
 * @see NumericStringMap
 * @see NumericSymbolMap
 * @see NumericJavascriptSymbolMap
 * @see NumericTypescriptSymbolMap
 *
 * @see NumberKeyMap
 * @see NumberValueMap
 * @see NumberBooleanMap
 * @see NumberNumericMap
 * @see NumberNumberMap
 * @see NumberBigIntMap
 * @see NumberStringMap
 * @see NumberSymbolMap
 * @see NumberJavascriptSymbolMap
 * @see NumberTypescriptSymbolMap
 *
 * @see BigIntKeyMap
 * @see BigIntValueMap
 * @see BigIntBooleanMap
 * @see BigIntNumericMap
 * @see BigIntNumberMap
 * @see BigIntBigIntMap
 * @see BigIntStringMap
 * @see BigIntSymbolMap
 * @see BigIntJavascriptSymbolMap
 * @see BigIntTypescriptSymbolMap
 *
 * @see StringKeyMap
 * @see StringValueMap
 * @see StringBooleanMap
 * @see StringNumericMap
 * @see StringNumberMap
 * @see StringBigIntMap
 * @see StringStringMap
 * @see StringSymbolMap
 * @see StringJavascriptSymbolMap
 * @see StringTypescriptSymbolMap
 *
 * @see SymbolKeyMap
 * @see SymbolValueMap
 * @see SymbolBooleanMap
 * @see SymbolNumericMap
 * @see SymbolNumberMap
 * @see SymbolBigIntMap
 * @see SymbolStringMap
 * @see SymbolSymbolMap
 * @see SymbolJavascriptSymbolMap
 * @see SymbolTypescriptSymbolMap
 *
 * @see JavascriptSymbolKeyMap
 * @see JavascriptSymbolValueMap
 * @see JavascriptSymbolBooleanMap
 * @see JavascriptSymbolNumericMap
 * @see JavascriptSymbolNumberMap
 * @see JavascriptSymbolBigIntMap
 * @see JavascriptSymbolStringMap
 * @see JavascriptSymbolSymbolMap
 * @see JavascriptSymbolJavascriptSymbolMap
 * @see JavascriptSymbolTypescriptSymbolMap
 *
 * @see TypescriptSymbolKeyMap
 * @see TypescriptSymbolValueMap
 * @see TypescriptSymbolBooleanMap
 * @see TypescriptSymbolNumericMap
 * @see TypescriptSymbolNumberMap
 * @see TypescriptSymbolBigIntMap
 * @see TypescriptSymbolStringMap
 * @see TypescriptSymbolSymbolMap
 * @see TypescriptSymbolJavascriptSymbolMap
 * @see TypescriptSymbolTypescriptSymbolMap
 */
export type Map<K, V, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link globalThis.Map MutableMap} of a key and a value
 *
 * @see MutableBooleanKeyMap
 * @see MutableBooleanValueMap
 * @see MutableBooleanBooleanMap
 * @see MutableBooleanNumericMap
 * @see MutableBooleanNumberMap
 * @see MutableBooleanBigIntMap
 * @see MutableBooleanStringMap
 * @see MutableBooleanSymbolMap
 * @see MutableBooleanJavascriptSymbolMap
 * @see MutableBooleanTypescriptSymbolMap
 *
 * @see MutableNumericKeyMap
 * @see MutableNumericValueMap
 * @see MutableNumericBooleanMap
 * @see MutableNumericNumericMap
 * @see MutableNumericNumberMap
 * @see MutableNumericBigIntMap
 * @see MutableNumericStringMap
 * @see MutableNumericSymbolMap
 * @see MutableNumericJavascriptSymbolMap
 * @see MutableNumericTypescriptSymbolMap
 *
 * @see MutableNumberKeyMap
 * @see MutableNumberValueMap
 * @see MutableNumberBooleanMap
 * @see MutableNumberNumericMap
 * @see MutableNumberNumberMap
 * @see MutableNumberBigIntMap
 * @see MutableNumberStringMap
 * @see MutableNumberSymbolMap
 * @see MutableNumberJavascriptSymbolMap
 * @see MutableNumberTypescriptSymbolMap
 *
 * @see MutableBigIntKeyMap
 * @see MutableBigIntValueMap
 * @see MutableBigIntBooleanMap
 * @see MutableBigIntNumericMap
 * @see MutableBigIntNumberMap
 * @see MutableBigIntBigIntMap
 * @see MutableBigIntStringMap
 * @see MutableBigIntSymbolMap
 * @see MutableBigIntJavascriptSymbolMap
 * @see MutableBigIntTypescriptSymbolMap
 *
 * @see MutableStringKeyMap
 * @see MutableStringValueMap
 * @see MutableStringBooleanMap
 * @see MutableStringNumericMap
 * @see MutableStringNumberMap
 * @see MutableStringBigIntMap
 * @see MutableStringStringMap
 * @see MutableStringSymbolMap
 * @see MutableStringJavascriptSymbolMap
 * @see MutableStringTypescriptSymbolMap
 *
 * @see MutableSymbolKeyMap
 * @see MutableSymbolValueMap
 * @see MutableSymbolBooleanMap
 * @see MutableSymbolNumericMap
 * @see MutableSymbolNumberMap
 * @see MutableSymbolBigIntMap
 * @see MutableSymbolStringMap
 * @see MutableSymbolSymbolMap
 * @see MutableSymbolJavascriptSymbolMap
 * @see MutableSymbolTypescriptSymbolMap
 *
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableJavascriptSymbolBooleanMap
 * @see MutableJavascriptSymbolNumericMap
 * @see MutableJavascriptSymbolNumberMap
 * @see MutableJavascriptSymbolBigIntMap
 * @see MutableJavascriptSymbolStringMap
 * @see MutableJavascriptSymbolSymbolMap
 * @see MutableJavascriptSymbolJavascriptSymbolMap
 * @see MutableJavascriptSymbolTypescriptSymbolMap
 *
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableTypescriptSymbolBooleanMap
 * @see MutableTypescriptSymbolNumericMap
 * @see MutableTypescriptSymbolNumberMap
 * @see MutableTypescriptSymbolBigIntMap
 * @see MutableTypescriptSymbolStringMap
 * @see MutableTypescriptSymbolSymbolMap
 * @see MutableTypescriptSymbolJavascriptSymbolMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 */
export type MutableMap<K, V, > = globalThis.Map<K, V>


/**
 * An interface declaration for a {@link globalThis.WeakMap WeakMap} of a key-value pair that is immutable.
 *
 * The associative collection is holding a key {@link Object} and {@link Symbol}
 * that is garbage-collectable.
 * A key may be present at one time and not at the other due to being garbage collected.
 *
 * @supportedBy Chrome 36, Chrome Android 36
 * @supportedBy Edge
 * @supportedBy Firefox 6
 * @supportedBy Opera 23
 * @supportedBy Safari 8, Safari iOS 8
 * @supportedBy Node.js 0.12.0
 * @supportedBy Deno
 * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
 * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
 */
export interface WeakMap<K extends WeakKey, V, > {

    /**
     * Retrieve the element associated to the {@link key} received in the {@link WeakMap associative collection}
     *
     * @param key The key to retrieve a possible value
     * @return Returns the value present if it exists, otherwise `undefined`.
     *         Always returns `undefined` if the {@link value} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 6
     * @supportedBy Opera 23
     * @supportedBy Safari 8, Safari iOS 8
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    get(key: K,): UndefinedOr<V>

    /**
     * Indicate whenever the {@link key} has an existant value in the current {@link WeakMap associative collection}
     *
     * @param key The key to test its presence
     * @return Returns `true` if it an element exists otherwise `false`.
     *         Always returns `false` if the {@link key} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 6
     * @supportedBy Opera 23
     * @supportedBy Safari 8, Safari iOS 8
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    has(key: K,): boolean

    /**
     * Give an output for the call {@link Object.toString.call} giving [object WeakMap] instead of the general [object Object]
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
     */
    readonly [Symbol.toStringTag]: string

}

/**
 * An interface declaration for a {@link globalThis.WeakMap WeakMap} of a key-value pair that is mutable.
 *
 * The associative collection is holding a key {@link Object} and {@link Symbol}
 * that is garbage-collectable.
 * A key may be present at one time and not at the other due to being garbage collected.
 *
 * @supportedBy Chrome 36, Chrome Android 36
 * @supportedBy Edge
 * @supportedBy Firefox 6
 * @supportedBy Opera 23
 * @supportedBy Safari 8, Safari iOS 8
 * @supportedBy Node.js 0.12.0
 * @supportedBy Deno
 * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
 * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
 */
export interface MutableWeakMap<K extends WeakKey, V, >
    extends WeakMap<K, V> {

    /**
     * Add or change the {@link value} associated to the {@link key} received
     * in the current {@link MutableWeakMap associative collection}
     *
     * @param key   The key to add or update
     * @param value The value to associate to the {@link key}
     * @throws TypeError The {@link key} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 6
     * @supportedBy Opera 23
     * @supportedBy Safari 8, Safari iOS 8
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    set(key: K, value: V,): this

    /**
     * Remove a {@link key} (if it exists) in the current {@link MutableWeakMap associative collection}
     *
     * @param key The key to possibly remove
     * @return Returns `true` if the {@link key} has been removed successfully, otherwise `false`.
     *         Always returns `false` if the {@link key} is not an {@link Object} or a {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry non-registered symbol}
     * @supportedBy Chrome 36, Chrome Android 36
     * @supportedBy Edge
     * @supportedBy Firefox 6
     * @supportedBy Opera 23
     * @supportedBy Safari 8, Safari iOS 8
     * @supportedBy Node.js 0.12.0
     * @supportedBy Deno
     * @by {@link https://developer.mozilla.org/docs/web/javascript/reference/global_objects/weakset/has/contributors.txt Mozilla Contributors}
     * @by {@link https://creativecommons.org/licenses/by-sa/2.5 CC BY-SA 2.5}
     */
    delete(key: K,): boolean

}
