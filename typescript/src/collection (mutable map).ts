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

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

//#region -------------------- Map (boolean) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key
 *
 * @see MutableMap
 * @see MutableBooleanValueMap
 * @see MutableBooleanBooleanMap
 */
export type MutableBooleanKeyMap<V, K extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableBooleanBooleanMap
 */
export type MutableBooleanValueMap<K, V extends boolean = boolean, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableBooleanBooleanMap<K extends boolean = boolean, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableNumericValueMap
 * @see MutableBooleanNumberMap
 * @see MutableBooleanBigIntMap
 */
export type MutableBooleanNumericMap<K extends boolean = boolean, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableNumberValueMap
 * @see MutableBooleanNumericMap
 */
export type MutableBooleanNumberMap<K extends boolean = boolean, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableNumberValueMap
 * @see MutableBooleanBigIntMap
 */
export type MutableBooleanBigIntMap<K extends boolean = boolean, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableStringValueMap
 */
export type MutableBooleanStringMap<K extends boolean = boolean, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableSymbolValueMap
 * @see MutableBooleanJavascriptSymbolMap
 * @see MutableBooleanTypescriptSymbolMap
 */
export type MutableBooleanSymbolMap<K extends boolean = boolean, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableBooleanSymbolMap
 */
export type MutableBooleanJavascriptSymbolMap<K extends boolean = boolean, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableBooleanKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableBooleanSymbolMap
 */
export type MutableBooleanTypescriptSymbolMap<K extends boolean = boolean, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (boolean) --------------------
//#region -------------------- Map (numeric) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key
 *
 * @see MutableMap
 * @see MutableNumberKeyMap
 * @see MutableBigIntKeyMap
 * @see MutableNumericValueMap
 * @see MutableNumericNumericMap
 */
export type MutableNumericKeyMap<V, K extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableNumberValueMap
 * @see MutableBigIntValueMap
 * @see MutableNumericKeyMap
 * @see MutableNumericNumericMap
 */
export type MutableNumericValueMap<K, V extends Numeric = Numeric, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableNumberBooleanMap
 * @see MutableBigIntBooleanMap
 * @see MutableNumericKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableNumericBooleanMap<K extends Numeric = Numeric, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and value
 *
 * @see MutableMap
 * @see MutableNumberNumericMap
 * @see MutableBigIntNumericMap
 * @see MutableNumericKeyMap
 * @see MutableNumericValueMap
 * @see MutableNumericNumberMap
 * @see MutableNumericBigIntMap
 */
export type MutableNumericNumericMap<K extends Numeric = Numeric, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableNumberNumberMap
 * @see MutableBigIntNumberMap
 * @see MutableNumericKeyMap
 * @see MutableNumberValueMap
 * @see MutableNumericNumericMap
 */
export type MutableNumericNumberMap<K extends Numeric = Numeric, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableNumberBigIntMap
 * @see MutableBigIntBigIntMap
 * @see MutableNumericKeyMap
 * @see MutableBigIntValueMap
 * @see MutableNumericNumericMap
 */
export type MutableNumericBigIntMap<K extends Numeric = Numeric, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableNumberStringMap
 * @see MutableBigIntStringMap
 * @see MutableNumericKeyMap
 * @see MutableStringValueMap
 */
export type MutableNumericStringMap<K extends Numeric = Numeric, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableNumberSymbolMap
 * @see MutableBigIntSymbolMap
 * @see MutableNumericKeyMap
 * @see MutableSymbolValueMap
 * @see MutableNumericJavascriptSymbolMap
 * @see MutableNumericTypescriptSymbolMap
 */
export type MutableNumericSymbolMap<K extends Numeric = Numeric, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumberJavascriptSymbolMap
 * @see MutableBigIntJavascriptSymbolMap
 * @see MutableNumericKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableNumericSymbolMap
 */
export type MutableNumericJavascriptSymbolMap<K extends Numeric = Numeric, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Numeric} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumberTypescriptSymbolMap
 * @see MutableBigIntTypescriptSymbolMap
 * @see MutableNumericKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableNumericSymbolMap
 */
export type MutableNumericTypescriptSymbolMap<K extends Numeric = Numeric, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (numeric) --------------------
//#region -------------------- Map (number) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key
 *
 * @see MutableMap
 * @see MutableNumericKeyMap
 * @see MutableNumberValueMap
 * @see MutableNumberNumberMap
 */
export type MutableNumberKeyMap<V, K extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} value
 *
 * @see MutableMap
 * @see MutableNumericValueMap
 * @see MutableNumberKeyMap
 * @see MutableNumberNumberMap
 */
export type MutableNumberValueMap<K, V extends number = number, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableNumericBooleanMap
 * @see MutableNumberKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableNumberBooleanMap<K extends number = number, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableNumericNumericMap
 * @see MutableNumericKeyMap
 * @see MutableNumericValueMap
 * @see MutableNumberNumberMap
 * @see MutableNumberBigIntMap
 */
export type MutableNumberNumericMap<K extends number = number, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and value
 *
 * @see MutableMap
 * @see MutableNumericNumberMap
 * @see MutableNumberKeyMap
 * @see MutableNumberValueMap
 * @see MutableNumberNumericMap
 */
export type MutableNumberNumberMap<K extends number = number, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableNumericBigIntMap
 * @see MutableNumberKeyMap
 * @see MutableBigIntValueMap
 * @see MutableNumberNumericMap
 */
export type MutableNumberBigIntMap<K extends number = number, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableNumericStringMap
 * @see MutableNumberKeyMap
 * @see MutableStringValueMap
 */
export type MutableNumberStringMap<K extends number = number, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableNumericSymbolMap
 * @see MutableNumberKeyMap
 * @see MutableSymbolValueMap
 * @see MutableNumberJavascriptSymbolMap
 * @see MutableNumberTypescriptSymbolMap
 */
export type MutableNumberSymbolMap<K extends number = number, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumericJavascriptSymbolMap
 * @see MutableNumberKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableNumberSymbolMap
 */
export type MutableNumberJavascriptSymbolMap<K extends number = number, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumericTypescriptSymbolMap
 * @see MutableNumberKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableNumberSymbolMap
 */
export type MutableNumberTypescriptSymbolMap<K extends number = number, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (number) --------------------
//#region -------------------- Map (bigint) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key
 *
 * @see MutableMap
 * @see MutableNumericKeyMap
 * @see MutableBigIntValueMap
 * @see MutableBigIntBigIntMap
 */
export type MutableBigIntKeyMap<V, K extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableNumericValueMap
 * @see MutableBigIntKeyMap
 * @see MutableBigIntBigIntMap
 */
export type MutableBigIntValueMap<K, V extends bigint = bigint, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableNumericBooleanMap
 * @see MutableBigIntKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableBigIntBooleanMap<K extends bigint = bigint, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableNumericNumericMap
 * @see MutableBigIntKeyMap
 * @see MutableNumericValueMap
 * @see MutableBigIntNumberMap
 * @see MutableBigIntBigIntMap
 */
export type MutableBigIntNumericMap<K extends bigint = bigint, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableNumericNumberMap
 * @see MutableBigIntKeyMap
 * @see MutableNumberValueMap
 * @see MutableBigIntNumericMap
 */
export type MutableBigIntNumberMap<K extends bigint = bigint, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and value
 *
 * @see MutableMap
 * @see MutableNumericBigIntMap
 * @see MutableBigIntKeyMap
 * @see MutableBigIntValueMap
 * @see MutableBigIntNumericMap
 */
export type MutableBigIntBigIntMap<K extends bigint = bigint, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableNumericStringMap
 * @see MutableBigIntKeyMap
 * @see MutableStringValueMap
 */
export type MutableBigIntStringMap<K extends bigint = bigint, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableNumericSymbolMap
 * @see MutableBigIntKeyMap
 * @see MutableSymbolValueMap
 * @see MutableBigIntJavascriptSymbolMap
 * @see MutableBigIntTypescriptSymbolMap
 */
export type MutableBigIntSymbolMap<K extends bigint = bigint, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumericJavascriptSymbolMap
 * @see MutableBigIntKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableBigIntSymbolMap
 */
export type MutableBigIntJavascriptSymbolMap<K extends bigint = bigint, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link BigInt} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableNumericTypescriptSymbolMap
 * @see MutableBigIntKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableBigIntSymbolMap
 */
export type MutableBigIntTypescriptSymbolMap<K extends bigint = bigint, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (bigint) --------------------
//#region -------------------- Map (string) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key
 *
 * @see MutableMap
 * @see MutableStringValueMap
 * @see MutableStringStringMap
 */
export type MutableStringKeyMap<V, K extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableStringStringMap
 */
export type MutableStringValueMap<K, V extends string = string, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableStringBooleanMap<K extends string = string, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableNumericValueMap
 * @see MutableStringNumberMap
 * @see MutableStringBigIntMap
 */
export type MutableStringNumericMap<K extends string = string, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Boolean} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableNumberValueMap
 * @see MutableStringNumericMap
 */
export type MutableStringNumberMap<K extends string = string, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableNumberValueMap
 * @see MutableStringNumericMap
 */
export type MutableStringBigIntMap<K extends string = string, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableStringValueMap
 */
export type MutableStringStringMap<K extends string = string, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableSymbolValueMap
 * @see MutableStringJavascriptSymbolMap
 * @see MutableStringTypescriptSymbolMap
 */
export type MutableStringSymbolMap<K extends string = string, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableStringSymbolMap
 */
export type MutableStringJavascriptSymbolMap<K extends string = string, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link String} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableStringKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableStringSymbolMap
 */
export type MutableStringTypescriptSymbolMap<K extends string = string, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (string) --------------------
//#region -------------------- Map (symbol) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableSymbolValueMap
 * @see MutableSymbolSymbolMap
 */
export type MutableSymbolKeyMap<V, K extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableSymbolKeyMap
 * @see MutableSymbolSymbolMap
 */
export type MutableSymbolValueMap<K, V extends symbol = symbol, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolBooleanMap
 * @see MutableTypescriptSymbolBooleanMap
 * @see MutableSymbolKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableSymbolBooleanMap<K extends symbol = symbol, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolNumericMap
 * @see MutableTypescriptSymbolNumericMap
 * @see MutableSymbolKeyMap
 * @see MutableNumericValueMap
 * @see MutableSymbolNumberMap
 * @see MutableSymbolBigIntMap
 */
export type MutableSymbolNumericMap<K extends symbol = symbol, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolNumberMap
 * @see MutableTypescriptSymbolNumberMap
 * @see MutableSymbolKeyMap
 * @see MutableNumberValueMap
 * @see MutableSymbolNumericMap
 */
export type MutableSymbolNumberMap<K extends symbol = symbol, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolBigIntMap
 * @see MutableTypescriptSymbolBigIntMap
 * @see MutableSymbolKeyMap
 * @see MutableNumberValueMap
 * @see MutableSymbolNumericMap
 */
export type MutableSymbolBigIntMap<K extends symbol = symbol, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolStringMap
 * @see MutableTypescriptSymbolStringMap
 * @see MutableSymbolKeyMap
 * @see MutableStringValueMap
 */
export type MutableSymbolStringMap<K extends symbol = symbol, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolSymbolMap
 * @see MutableTypescriptSymbolSymbolMap
 * @see MutableSymbolKeyMap
 * @see MutableSymbolValueMap
 * @see MutableSymbolJavascriptSymbolMap
 * @see MutableSymbolTypescriptSymbolMap
 */
export type MutableSymbolSymbolMap<K extends symbol = symbol, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolJavascriptSymbolMap
 * @see MutableTypescriptSymbolJavascriptSymbolMap
 * @see MutableSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableSymbolSymbolMap
 */
export type MutableSymbolJavascriptSymbolMap<K extends symbol = symbol, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Symbol} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableJavascriptSymbolTypescriptSymbolMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 * @see MutableSymbolKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableSymbolSymbolMap
 */
export type MutableSymbolTypescriptSymbolMap<K extends symbol = symbol, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (symbol) --------------------
//#region -------------------- Map (javascript symbol) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key
 *
 * @see MutableMap
 * @see MutableSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableJavascriptSymbolJavascriptSymbolMap
 */
export type MutableJavascriptSymbolKeyMap<V, K extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableSymbolValueMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableJavascriptSymbolJavascriptSymbolMap
 */
export type MutableJavascriptSymbolValueMap<K, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableSymbolBooleanMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableJavascriptSymbolBooleanMap<K extends JavascriptSymbol = JavascriptSymbol, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableSymbolNumericMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableNumericValueMap
 * @see MutableJavascriptSymbolNumberMap
 * @see MutableJavascriptSymbolBigIntMap
 */
export type MutableJavascriptSymbolNumericMap<K extends JavascriptSymbol = JavascriptSymbol, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableSymbolNumberMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 */
export type MutableJavascriptSymbolNumberMap<K extends JavascriptSymbol = JavascriptSymbol, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableSymbolBigIntMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableBigIntValueMap
 * @see MutableJavascriptSymbolNumericMap
 */
export type MutableJavascriptSymbolBigIntMap<K extends JavascriptSymbol = JavascriptSymbol, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableSymbolStringMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableStringValueMap
 */
export type MutableJavascriptSymbolStringMap<K extends JavascriptSymbol = JavascriptSymbol, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link Number} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableSymbolSymbolMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableSymbolValueMap
 * @see MutableNumberJavascriptSymbolMap
 * @see MutableNumberTypescriptSymbolMap
 */
export type MutableJavascriptSymbolSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableSymbolJavascriptSymbolMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableJavascriptSymbolSymbolMap
 */
export type MutableJavascriptSymbolJavascriptSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link JavascriptSymbol} key and a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableSymbolTypescriptSymbolMap
 * @see MutableJavascriptSymbolKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableJavascriptSymbolSymbolMap
 */
export type MutableJavascriptSymbolTypescriptSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (javascript symbol) --------------------
//#region -------------------- Map (typescript symbol) --------------------

/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key
 *
 * @see MutableMap
 * @see MutableSymbolKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 */
export type MutableTypescriptSymbolKeyMap<V, K extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} value
 *
 * @see MutableMap
 * @see MutableSymbolValueMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 */
export type MutableTypescriptSymbolValueMap<K, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link Boolean} value
 *
 * @see MutableMap
 * @see MutableSymbolBooleanMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableBooleanValueMap
 */
export type MutableTypescriptSymbolBooleanMap<K extends TypescriptSymbol = TypescriptSymbol, V extends boolean = boolean, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link Numeric} value
 *
 * @see MutableMap
 * @see MutableTypescriptSymbolNumericMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableNumericValueMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 * @see MutableTypescriptSymbolBigIntMap
 */
export type MutableTypescriptSymbolNumericMap<K extends TypescriptSymbol = TypescriptSymbol, V extends Numeric = Numeric, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link Number} value
 *
 * @see MutableMap
 * @see MutableSymbolNumberMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableNumberValueMap
 * @see MutableTypescriptSymbolNumericMap
 */
export type MutableTypescriptSymbolNumberMap<K extends TypescriptSymbol = TypescriptSymbol, V extends number = number, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link BigInt} value
 *
 * @see MutableMap
 * @see MutableSymbolBigIntMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableBigIntValueMap
 * @see MutableTypescriptSymbolNumericMap
 */
export type MutableTypescriptSymbolBigIntMap<K extends TypescriptSymbol = TypescriptSymbol, V extends bigint = bigint, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link String} value
 *
 * @see MutableMap
 * @see MutableSymbolStringMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableStringValueMap
 */
export type MutableTypescriptSymbolStringMap<K extends TypescriptSymbol = TypescriptSymbol, V extends string = string, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link Symbol} value
 *
 * @see MutableMap
 * @see MutableSymbolSymbolMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableSymbolValueMap
 * @see MutableTypescriptSymbolJavascriptSymbolMap
 * @see MutableTypescriptSymbolTypescriptSymbolMap
 */
export type MutableTypescriptSymbolSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends symbol = symbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and a {@link JavascriptSymbol} value
 *
 * @see MutableMap
 * @see MutableSymbolJavascriptSymbolMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableJavascriptSymbolValueMap
 * @see MutableTypescriptSymbolSymbolMap
 */
export type MutableTypescriptSymbolJavascriptSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends JavascriptSymbol = JavascriptSymbol, > = Map<K, V>
/**
 * A type-alias for a {@link Map MutableMap} having a {@link TypescriptSymbol} key and value
 *
 * @see MutableMap
 * @see MutableSymbolTypescriptSymbolMap
 * @see MutableTypescriptSymbolKeyMap
 * @see MutableTypescriptSymbolValueMap
 * @see MutableTypescriptSymbolSymbolMap
 */
export type MutableTypescriptSymbolTypescriptSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends TypescriptSymbol = TypescriptSymbol, > = Map<K, V>

//#endregion -------------------- Map (typescript symbol) --------------------
