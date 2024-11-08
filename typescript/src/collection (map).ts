/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

//#region -------------------- Map (boolean) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key
 *
 * @see import('collection').Map
 * @see BooleanValueMap
 * @see BooleanBooleanMap
 */
export type BooleanKeyMap<V, K extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see BooleanBooleanMap
 */
export type BooleanValueMap<K, V extends boolean = boolean, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see BooleanValueMap
 */
export type BooleanBooleanMap<K extends boolean = boolean, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see NumericValueMap
 * @see BooleanNumberMap
 * @see BooleanBigIntMap
 */
export type BooleanNumericMap<K extends boolean = boolean, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see NumberValueMap
 * @see BooleanNumericMap
 */
export type BooleanNumberMap<K extends boolean = boolean, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see NumberValueMap
 * @see BooleanBigIntMap
 */
export type BooleanBigIntMap<K extends boolean = boolean, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see StringValueMap
 */
export type BooleanStringMap<K extends boolean = boolean, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see SymbolValueMap
 * @see BooleanJavascriptSymbolMap
 * @see BooleanTypescriptSymbolMap
 */
export type BooleanSymbolMap<K extends boolean = boolean, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see JavascriptSymbolValueMap
 * @see BooleanSymbolMap
 */
export type BooleanJavascriptSymbolMap<K extends boolean = boolean, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see BooleanKeyMap
 * @see TypescriptSymbolValueMap
 * @see BooleanSymbolMap
 */
export type BooleanTypescriptSymbolMap<K extends boolean = boolean, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (boolean) --------------------
//#region -------------------- Map (numeric) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key
 *
 * @see import('collection').Map
 * @see NumberKeyMap
 * @see BigIntKeyMap
 * @see NumericValueMap
 * @see NumericNumericMap
 */
export type NumericKeyMap<V, K extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see NumberValueMap
 * @see BigIntValueMap
 * @see NumericKeyMap
 * @see NumericNumericMap
 */
export type NumericValueMap<K, V extends Numeric = Numeric, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see NumberBooleanMap
 * @see BigIntBooleanMap
 * @see NumericKeyMap
 * @see BooleanValueMap
 */
export type NumericBooleanMap<K extends Numeric = Numeric, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and value
 *
 * @see import('collection').Map
 * @see NumberNumericMap
 * @see BigIntNumericMap
 * @see NumericKeyMap
 * @see NumericValueMap
 * @see NumericNumberMap
 * @see NumericBigIntMap
 */
export type NumericNumericMap<K extends Numeric = Numeric, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see NumberNumberMap
 * @see BigIntNumberMap
 * @see NumericKeyMap
 * @see NumberValueMap
 * @see NumericNumericMap
 */
export type NumericNumberMap<K extends Numeric = Numeric, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see NumberBigIntMap
 * @see BigIntBigIntMap
 * @see NumericKeyMap
 * @see BigIntValueMap
 * @see NumericNumericMap
 */
export type NumericBigIntMap<K extends Numeric = Numeric, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see NumberStringMap
 * @see BigIntStringMap
 * @see NumericKeyMap
 * @see StringValueMap
 */
export type NumericStringMap<K extends Numeric = Numeric, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see NumberSymbolMap
 * @see BigIntSymbolMap
 * @see NumericKeyMap
 * @see SymbolValueMap
 * @see NumericJavascriptSymbolMap
 * @see NumericTypescriptSymbolMap
 */
export type NumericSymbolMap<K extends Numeric = Numeric, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumberJavascriptSymbolMap
 * @see BigIntJavascriptSymbolMap
 * @see NumericKeyMap
 * @see JavascriptSymbolValueMap
 * @see NumericSymbolMap
 */
export type NumericJavascriptSymbolMap<K extends Numeric = Numeric, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Numeric} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumberTypescriptSymbolMap
 * @see BigIntTypescriptSymbolMap
 * @see NumericKeyMap
 * @see TypescriptSymbolValueMap
 * @see NumericSymbolMap
 */
export type NumericTypescriptSymbolMap<K extends Numeric = Numeric, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (numeric) --------------------
//#region -------------------- Map (number) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key
 *
 * @see import('collection').Map
 * @see NumericKeyMap
 * @see NumberValueMap
 * @see NumberNumberMap
 */
export type NumberKeyMap<V, K extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} value
 *
 * @see import('collection').Map
 * @see NumericValueMap
 * @see NumberKeyMap
 * @see NumberNumberMap
 */
export type NumberValueMap<K, V extends number = number, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see NumericBooleanMap
 * @see NumberKeyMap
 * @see BooleanValueMap
 */
export type NumberBooleanMap<K extends number = number, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see NumericNumericMap
 * @see NumericKeyMap
 * @see NumericValueMap
 * @see NumberNumberMap
 * @see NumberBigIntMap
 */
export type NumberNumericMap<K extends number = number, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and value
 *
 * @see import('collection').Map
 * @see NumericNumberMap
 * @see NumberKeyMap
 * @see NumberValueMap
 * @see NumberNumericMap
 */
export type NumberNumberMap<K extends number = number, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see NumericBigIntMap
 * @see NumberKeyMap
 * @see BigIntValueMap
 * @see NumberNumericMap
 */
export type NumberBigIntMap<K extends number = number, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see NumericStringMap
 * @see NumberKeyMap
 * @see StringValueMap
 */
export type NumberStringMap<K extends number = number, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see NumericSymbolMap
 * @see NumberKeyMap
 * @see SymbolValueMap
 * @see NumberJavascriptSymbolMap
 * @see NumberTypescriptSymbolMap
 */
export type NumberSymbolMap<K extends number = number, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumericJavascriptSymbolMap
 * @see NumberKeyMap
 * @see JavascriptSymbolValueMap
 * @see NumberSymbolMap
 */
export type NumberJavascriptSymbolMap<K extends number = number, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumericTypescriptSymbolMap
 * @see NumberKeyMap
 * @see TypescriptSymbolValueMap
 * @see NumberSymbolMap
 */
export type NumberTypescriptSymbolMap<K extends number = number, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (number) --------------------
//#region -------------------- Map (bigint) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key
 *
 * @see import('collection').Map
 * @see NumericKeyMap
 * @see BigIntValueMap
 * @see BigIntBigIntMap
 */
export type BigIntKeyMap<V, K extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see NumericValueMap
 * @see BigIntKeyMap
 * @see BigIntBigIntMap
 */
export type BigIntValueMap<K, V extends bigint = bigint, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see NumericBooleanMap
 * @see BigIntKeyMap
 * @see BooleanValueMap
 */
export type BigIntBooleanMap<K extends bigint = bigint, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see NumericNumericMap
 * @see BigIntKeyMap
 * @see NumericValueMap
 * @see BigIntNumberMap
 * @see BigIntBigIntMap
 */
export type BigIntNumericMap<K extends bigint = bigint, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see NumericNumberMap
 * @see BigIntKeyMap
 * @see NumberValueMap
 * @see BigIntNumericMap
 */
export type BigIntNumberMap<K extends bigint = bigint, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and value
 *
 * @see import('collection').Map
 * @see NumericBigIntMap
 * @see BigIntKeyMap
 * @see BigIntValueMap
 * @see BigIntNumericMap
 */
export type BigIntBigIntMap<K extends bigint = bigint, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see NumericStringMap
 * @see BigIntKeyMap
 * @see StringValueMap
 */
export type BigIntStringMap<K extends bigint = bigint, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see NumericSymbolMap
 * @see BigIntKeyMap
 * @see SymbolValueMap
 * @see BigIntJavascriptSymbolMap
 * @see BigIntTypescriptSymbolMap
 */
export type BigIntSymbolMap<K extends bigint = bigint, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumericJavascriptSymbolMap
 * @see BigIntKeyMap
 * @see JavascriptSymbolValueMap
 * @see BigIntSymbolMap
 */
export type BigIntJavascriptSymbolMap<K extends bigint = bigint, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link BigInt} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see NumericTypescriptSymbolMap
 * @see BigIntKeyMap
 * @see TypescriptSymbolValueMap
 * @see BigIntSymbolMap
 */
export type BigIntTypescriptSymbolMap<K extends bigint = bigint, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (bigint) --------------------
//#region -------------------- Map (string) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key
 *
 * @see import('collection').Map
 * @see StringValueMap
 * @see StringStringMap
 */
export type StringKeyMap<V, K extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see StringStringMap
 */
export type StringValueMap<K, V extends string = string, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see BooleanValueMap
 */
export type StringBooleanMap<K extends string = string, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see NumericValueMap
 * @see StringNumberMap
 * @see StringBigIntMap
 */
export type StringNumericMap<K extends string = string, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Boolean} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see NumberValueMap
 * @see StringNumericMap
 */
export type StringNumberMap<K extends string = string, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see NumberValueMap
 * @see StringNumericMap
 */
export type StringBigIntMap<K extends string = string, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see StringValueMap
 */
export type StringStringMap<K extends string = string, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see SymbolValueMap
 * @see StringJavascriptSymbolMap
 * @see StringTypescriptSymbolMap
 */
export type StringSymbolMap<K extends string = string, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see JavascriptSymbolValueMap
 * @see StringSymbolMap
 */
export type StringJavascriptSymbolMap<K extends string = string, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link String} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see StringKeyMap
 * @see TypescriptSymbolValueMap
 * @see StringSymbolMap
 */
export type StringTypescriptSymbolMap<K extends string = string, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (string) --------------------
//#region -------------------- Map (symbol) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key
 *
 * @see import('collection').Map
 * @see JavascriptSymbolKeyMap
 * @see TypescriptSymbolKeyMap
 * @see SymbolValueMap
 * @see SymbolSymbolMap
 */
export type SymbolKeyMap<V, K extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolValueMap
 * @see TypescriptSymbolValueMap
 * @see SymbolKeyMap
 * @see SymbolSymbolMap
 */
export type SymbolValueMap<K, V extends symbol = symbol, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolBooleanMap
 * @see TypescriptSymbolBooleanMap
 * @see SymbolKeyMap
 * @see BooleanValueMap
 */
export type SymbolBooleanMap<K extends symbol = symbol, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolNumericMap
 * @see TypescriptSymbolNumericMap
 * @see SymbolKeyMap
 * @see NumericValueMap
 * @see SymbolNumberMap
 * @see SymbolBigIntMap
 */
export type SymbolNumericMap<K extends symbol = symbol, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolNumberMap
 * @see TypescriptSymbolNumberMap
 * @see SymbolKeyMap
 * @see NumberValueMap
 * @see SymbolNumericMap
 */
export type SymbolNumberMap<K extends symbol = symbol, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolBigIntMap
 * @see TypescriptSymbolBigIntMap
 * @see SymbolKeyMap
 * @see NumberValueMap
 * @see SymbolNumericMap
 */
export type SymbolBigIntMap<K extends symbol = symbol, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolStringMap
 * @see TypescriptSymbolStringMap
 * @see SymbolKeyMap
 * @see StringValueMap
 */
export type SymbolStringMap<K extends symbol = symbol, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolSymbolMap
 * @see TypescriptSymbolSymbolMap
 * @see SymbolKeyMap
 * @see SymbolValueMap
 * @see SymbolJavascriptSymbolMap
 * @see SymbolTypescriptSymbolMap
 */
export type SymbolSymbolMap<K extends symbol = symbol, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolJavascriptSymbolMap
 * @see TypescriptSymbolJavascriptSymbolMap
 * @see SymbolKeyMap
 * @see JavascriptSymbolValueMap
 * @see SymbolSymbolMap
 */
export type SymbolJavascriptSymbolMap<K extends symbol = symbol, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Symbol} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see JavascriptSymbolTypescriptSymbolMap
 * @see TypescriptSymbolTypescriptSymbolMap
 * @see SymbolKeyMap
 * @see TypescriptSymbolValueMap
 * @see SymbolSymbolMap
 */
export type SymbolTypescriptSymbolMap<K extends symbol = symbol, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (symbol) --------------------
//#region -------------------- Map (javascript symbol) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key
 *
 * @see import('collection').Map
 * @see SymbolKeyMap
 * @see JavascriptSymbolValueMap
 * @see JavascriptSymbolJavascriptSymbolMap
 */
export type JavascriptSymbolKeyMap<V, K extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see SymbolValueMap
 * @see JavascriptSymbolKeyMap
 * @see JavascriptSymbolJavascriptSymbolMap
 */
export type JavascriptSymbolValueMap<K, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see SymbolBooleanMap
 * @see JavascriptSymbolKeyMap
 * @see BooleanValueMap
 */
export type JavascriptSymbolBooleanMap<K extends JavascriptSymbol = JavascriptSymbol, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see SymbolNumericMap
 * @see JavascriptSymbolKeyMap
 * @see NumericValueMap
 * @see JavascriptSymbolNumberMap
 * @see JavascriptSymbolBigIntMap
 */
export type JavascriptSymbolNumericMap<K extends JavascriptSymbol = JavascriptSymbol, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see SymbolNumberMap
 * @see JavascriptSymbolKeyMap
 * @see JavascriptSymbolValueMap
 */
export type JavascriptSymbolNumberMap<K extends JavascriptSymbol = JavascriptSymbol, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see SymbolBigIntMap
 * @see JavascriptSymbolKeyMap
 * @see BigIntValueMap
 * @see JavascriptSymbolNumericMap
 */
export type JavascriptSymbolBigIntMap<K extends JavascriptSymbol = JavascriptSymbol, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see SymbolStringMap
 * @see JavascriptSymbolKeyMap
 * @see StringValueMap
 */
export type JavascriptSymbolStringMap<K extends JavascriptSymbol = JavascriptSymbol, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link Number} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see SymbolSymbolMap
 * @see JavascriptSymbolKeyMap
 * @see SymbolValueMap
 * @see NumberJavascriptSymbolMap
 * @see NumberTypescriptSymbolMap
 */
export type JavascriptSymbolSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see SymbolJavascriptSymbolMap
 * @see JavascriptSymbolKeyMap
 * @see JavascriptSymbolValueMap
 * @see JavascriptSymbolSymbolMap
 */
export type JavascriptSymbolJavascriptSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link JavascriptSymbol} key and a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see SymbolTypescriptSymbolMap
 * @see JavascriptSymbolKeyMap
 * @see TypescriptSymbolValueMap
 * @see JavascriptSymbolSymbolMap
 */
export type JavascriptSymbolTypescriptSymbolMap<K extends JavascriptSymbol = JavascriptSymbol, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (javascript symbol) --------------------
//#region -------------------- Map (typescript symbol) --------------------

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key
 *
 * @see import('collection').Map
 * @see SymbolKeyMap
 * @see TypescriptSymbolValueMap
 * @see TypescriptSymbolTypescriptSymbolMap
 */
export type TypescriptSymbolKeyMap<V, K extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} value
 *
 * @see import('collection').Map
 * @see SymbolValueMap
 * @see TypescriptSymbolKeyMap
 * @see TypescriptSymbolTypescriptSymbolMap
 */
export type TypescriptSymbolValueMap<K, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link Boolean} value
 *
 * @see import('collection').Map
 * @see SymbolBooleanMap
 * @see TypescriptSymbolKeyMap
 * @see BooleanValueMap
 */
export type TypescriptSymbolBooleanMap<K extends TypescriptSymbol = TypescriptSymbol, V extends boolean = boolean, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link Numeric} value
 *
 * @see import('collection').Map
 * @see TypescriptSymbolNumericMap
 * @see TypescriptSymbolKeyMap
 * @see NumericValueMap
 * @see TypescriptSymbolTypescriptSymbolMap
 * @see TypescriptSymbolBigIntMap
 */
export type TypescriptSymbolNumericMap<K extends TypescriptSymbol = TypescriptSymbol, V extends Numeric = Numeric, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link Number} value
 *
 * @see import('collection').Map
 * @see SymbolNumberMap
 * @see TypescriptSymbolKeyMap
 * @see NumberValueMap
 * @see TypescriptSymbolNumericMap
 */
export type TypescriptSymbolNumberMap<K extends TypescriptSymbol = TypescriptSymbol, V extends number = number, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link BigInt} value
 *
 * @see import('collection').Map
 * @see SymbolBigIntMap
 * @see TypescriptSymbolKeyMap
 * @see BigIntValueMap
 * @see TypescriptSymbolNumericMap
 */
export type TypescriptSymbolBigIntMap<K extends TypescriptSymbol = TypescriptSymbol, V extends bigint = bigint, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link String} value
 *
 * @see import('collection').Map
 * @see SymbolStringMap
 * @see TypescriptSymbolKeyMap
 * @see StringValueMap
 */
export type TypescriptSymbolStringMap<K extends TypescriptSymbol = TypescriptSymbol, V extends string = string, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link Symbol} value
 *
 * @see import('collection').Map
 * @see SymbolSymbolMap
 * @see TypescriptSymbolKeyMap
 * @see SymbolValueMap
 * @see TypescriptSymbolJavascriptSymbolMap
 * @see TypescriptSymbolTypescriptSymbolMap
 */
export type TypescriptSymbolSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends symbol = symbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and a {@link JavascriptSymbol} value
 *
 * @see import('collection').Map
 * @see SymbolJavascriptSymbolMap
 * @see TypescriptSymbolKeyMap
 * @see JavascriptSymbolValueMap
 * @see TypescriptSymbolSymbolMap
 */
export type TypescriptSymbolJavascriptSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends JavascriptSymbol = JavascriptSymbol, > = ReadonlyMap<K, V>
/**
 * A type-alias for a {@link ReadonlyMap Map} having a {@link TypescriptSymbol} key and value
 *
 * @see import('collection').Map
 * @see SymbolTypescriptSymbolMap
 * @see TypescriptSymbolKeyMap
 * @see TypescriptSymbolValueMap
 * @see TypescriptSymbolSymbolMap
 */
export type TypescriptSymbolTypescriptSymbolMap<K extends TypescriptSymbol = TypescriptSymbol, V extends TypescriptSymbol = TypescriptSymbol, > = ReadonlyMap<K, V>

//#endregion -------------------- Map (typescript symbol) --------------------
