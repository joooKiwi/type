/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

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
