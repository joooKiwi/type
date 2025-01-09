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

//#region -------------------- mixed (direct - double) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see StringOrNumericOrObject
 */
export type StringOrNumeric<T extends | string | number | bigint = | string | number | bigint, > = T
/**
 * A type-alias for a value ({@link String} or {@link Number})
 * as a primitive
 *
 * @see StringOrNumberOrObject
 */
export type StringOrNumber<T extends | string | number = | string | number, > = T
/**
 * A type-alias for a value ({@link String} or {@link BigInt})
 * as a primitive
 *
 * @see StringOrBigIntOrObject
 */
export type StringOrBigInt<T extends | string | bigint = | string | bigint, > = T
/**
 * A type-alias for a value ({@link String} or {@link Boolean})
 * as a primitive
 *
 * @see StringOrBooleanOrObject
 */
export type StringOrBoolean<T extends | string | boolean = | string | boolean, > = T
/**
 * A type-alias for a value ({@link String} or {@link Symbol})
 * as a primitive
 *
 * @see StringOrSymbolOrObject
 */
export type StringOrSymbol<T extends | string | symbol = | string | symbol, > = T
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see BooleanOrNumericOrObject
 */
export type BooleanOrNumeric<T extends | boolean | number | bigint = | boolean | number | bigint, > = T
/**
 * A type-alias for a value ({@link Boolean} or {@link Number})
 * as a primitive
 *
 * @see BooleanOrNumberOrObject
 */
export type BooleanOrNumber<T extends | boolean | number = | boolean | number, > = T
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a primitive
 *
 * @see BooleanOrBigIntOrObject
 */
export type BooleanOrBigInt<T extends | boolean | bigint = | boolean | bigint, > = T
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a primitive
 *
 * @see BooleanOrSymbolOrObject
 */
export type BooleanOrSymbol<T extends | boolean | symbol = | boolean | symbol, > = T
/**
 * A type-alias for a value ({@link Number}, {@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see Numeric
 * @see NumericOrSymbolOrObject
 */
export type NumericOrSymbol<T extends | number | bigint | symbol = | number | bigint | symbol, > = T
/**
 * A type-alias for a value ({@link Number} or {@link Symbol})
 * as a primitive
 *
 * @see NumberOrSymbolOrObject
 */
export type NumberOrSymbol<T extends | number | symbol = | number | symbol, > = T
/**
 * A type-alias for a value ({@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see BigIntOrSymbolOrObject
 */
export type BigIntOrSymbol<T extends | bigint | symbol = | bigint | symbol, > = T

//#endregion -------------------- mixed (direct - double) --------------------
//#region -------------------- mixed (direct - triple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see StringOrBooleanOrNumericOrObject
 */
export type StringOrBooleanOrNumeric<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = T
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Number})
 * as a primitive
 *
 * @see StringOrBooleanOrNumberOrObject
 */
export type StringOrBooleanOrNumber<T extends | string | boolean | number = | string | boolean | number, > = T
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link BigInt})
 * as a primitive
 *
 * @see StringOrBooleanOrBigIntOrObject
 */
export type StringOrBooleanOrBigInt<T extends | string | boolean | bigint = | string | boolean | bigint, > = T
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Symbol})
 * as a primitive
 *
 * @see StringOrBooleanOrSymbolOrObject
 */
export type StringOrBooleanOrSymbol<T extends | string | boolean | symbol = | string | boolean | symbol, > = T
/**
 * A type-alias for a value ({@link Boolean}, {@link Number}, {@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see Numeric
 * @see BooleanOrNumericOrSymbolOrObject
 */
export type BooleanOrNumericOrSymbol<T extends | boolean | number | bigint | symbol = | boolean | number | bigint | symbol, > = T
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link Symbol})
 * as a primitive
 *
 * @see BooleanOrNumberOrSymbolOrObject
 */
export type BooleanOrNumberOrSymbol<T extends | boolean | number | symbol = | boolean | number | symbol, > = T
/**
 * A type-alias for a value ({@link Boolean}, {@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see BooleanOrBigIntOrSymbolOrObject
 */
export type BooleanOrBigIntOrSymbol<T extends | boolean | bigint | symbol = | boolean | bigint | symbol, > = T

//#endregion -------------------- mixed (direct - triple) --------------------
//#region -------------------- mixed (direct - quadruple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number}, {@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see Numeric
 * @see StringOrBooleanOrNumericOrSymbolOrObject
 */
export type StringOrBooleanOrNumericOrSymbol<T extends | string | boolean | number | bigint | symbol = | string | boolean | number | bigint | symbol, > = T
/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link Symbol})
 * as a primitive
 *
 * @see StringOrBooleanOrNumberOrSymbolOrObject
 */
export type StringOrBooleanOrNumberOrSymbol<T extends | string | boolean | number | symbol = | string | boolean | number | symbol, > = T
/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link BigInt} or {@link Symbol})
 * as a primitive
 *
 * @see StringOrBooleanOrBigIntOrSymbolOrObject
 */
export type StringOrBooleanOrBigIntOrSymbol<T extends | string | boolean | bigint | symbol = | string | boolean | bigint | symbol, > = T

//#endregion -------------------- mixed (direct - quadruple) --------------------
//#region -------------------- mixed (or object - double) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see StringOrNumeric
 * @see TemplateOrStringOrNumericOrObject
 */
export type StringOrNumericOrObject<T extends string | number | bigint = string | number | bigint, > = | T | String | Number | BigInt
/**
 * A type-alias for a value ({@link String} or {@link Number})
 * as a primitive or an object
 *
 * @see StringOrNumber
 * @see TemplateOrStringOrNumberOrObject
 */
export type StringOrNumberOrObject<T extends | string | number = | string | number, > = | T | String | Number
/**
 * A type-alias for a value ({@link String} or {@link BigInt})
 * as a primitive or an object
 *
 * @see StringOrBigInt
 * @see TemplateOrStringOrBigIntOrObject
 */
export type StringOrBigIntOrObject<T extends | string | bigint = | string | bigint, > = | T | String | BigInt
/**
 * A type-alias for a value ({@link String} or {@link Boolean})
 * as a primitive or an object
 *
 * @see StringOrBoolean
 * @see TemplateOrStringOrBooleanOrObject
 */
export type StringOrBooleanOrObject<T extends | string | boolean = | string | boolean, > = | T | String | Boolean
/**
 * A type-alias for a value ({@link String} or {@link Symbol})
 * as a primitive or an object
 *
 * @see StringOrSymbol
 */
export type StringOrSymbolOrObject<T extends | string | symbol = | string | symbol, > = | T | String | Symbol
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see Numeric
 * @see BooleanOrNumeric
 * @see TemplateOrBooleanOrNumericOrObject
 */
export type BooleanOrNumericOrObject<T extends | boolean | number | bigint = | boolean | number | bigint, > = | T | Boolean | Number | BigInt
/**
 * A type-alias for a value ({@link Boolean} or {@link Number})
 * as a primitive or an object
 *
 * @see BooleanOrNumber
 * @see TemplateOrBooleanOrNumberOrObject
 */
export type BooleanOrNumberOrObject<T extends | boolean | number = | boolean | number, > = | T | Boolean | Number
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a primitive or an object
 *
 * @see BooleanOrBigInt
 * @see TemplateOrBooleanOrBigIntOrObject
 */
export type BooleanOrBigIntOrObject<T extends | boolean | bigint = | boolean | bigint, > = | T | Boolean | BigInt
/**
 * A type-alias for a value ({@link Boolean} or {@link Symbol})
 * as a primitive or an object
 *
 * @see BooleanOrSymbol
 */
export type BooleanOrSymbolOrObject<T extends | boolean | symbol = | boolean | symbol, > = | T | Boolean | Symbol
/**
 * A type-alias for a value ({@link Number}, {@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see NumericOrSymbol
 */
export type NumericOrSymbolOrObject<T extends | number | bigint | symbol = | number | bigint | symbol, > = | T | Number | BigInt | Symbol
/**
 * A type-alias for a value ({@link Number} or {@link Symbol})
 * as a primitive or an object
 *
 * @see NumberOrSymbol
 */
export type NumberOrSymbolOrObject<T extends | number | symbol = | number | symbol, > = | T | Number | Symbol
/**
 * A type-alias for a value ({@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see BigIntOrSymbol
 */
export type BigIntOrSymbolOrObject<T extends | bigint | symbol = | bigint | symbol, > = | T | BigInt | Symbol

//#endregion -------------------- mixed (or object - double) --------------------
//#region -------------------- mixed (or object - triple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see Numeric
 * @see StringOrBooleanOrNumeric
 * @see TemplateOrStringOrBooleanOrNumericOrObject
 */
export type StringOrBooleanOrNumericOrObject<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = | T | String | Boolean | Number | BigInt
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Number})
 * as a primitive or an object
 *
 * @see StringOrBooleanOrNumber
 * @see TemplateOrStringOrBooleanOrNumberOrObject
 */
export type StringOrBooleanOrNumberOrObject<T extends | string | boolean | number = | string | boolean | number, > = | T | String | Boolean | Number
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link BigInt})
 * as a primitive or an object
 *
 * @see StringOrBooleanOrBigInt
 * @see TemplateOrStringOrBooleanOrBigIntOrObject
 */
export type StringOrBooleanOrBigIntOrObject<T extends | string | boolean | bigint = | string | boolean | bigint, > = | T | String | Boolean | BigInt
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Symbol})
 * as a primitive or an object
 *
 * @see StringOrBooleanOrSymbol
 */
export type StringOrBooleanOrSymbolOrObject<T extends | string | boolean | symbol = | string | boolean | symbol, > = | T | String | Boolean | Symbol
/**
 * A type-alias for a value ({@link Boolean}, {@link Number}, {@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see Numeric
 * @see BooleanOrNumericOrSymbol
 */
export type BooleanOrNumericOrSymbolOrObject<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = | T | Boolean | Number | BigInt | Symbol
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link Symbol})
 * as a primitive or an object
 *
 * @see BooleanOrNumberOrSymbol
 */
export type BooleanOrNumberOrSymbolOrObject<T extends | string | boolean | number = | string | boolean | number, > = | T | Boolean | Number | Symbol
/**
 * A type-alias for a value ({@link Boolean}, {@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see BooleanOrBigIntOrSymbol
 */
export type BooleanOrBigIntOrSymbolOrObject<T extends | string | boolean | bigint = | string | boolean | bigint, > = | T | Boolean | BigInt | Symbol

//#endregion -------------------- mixed (or object - triple) --------------------
//#region -------------------- mixed (or object - quadruple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} {@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see Numeric
 * @see StringOrBooleanOrNumericOrSymbol
 */
export type StringOrBooleanOrNumericOrSymbolOrObject<T extends | string | boolean | number | bigint | symbol = | string | boolean | number | bigint | symbol, > = | T | String | Boolean | Number | BigInt | Symbol
/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link Symbol})
 * as a primitive or an object
 *
 * @see StringOrBooleanOrNumberOrSymbol
 */
export type StringOrBooleanOrNumberOrSymbolOrObject<T extends | string | boolean | number | symbol = | string | boolean | number | symbol, > = | T | String | Boolean | Number | Symbol
/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link BigInt} or {@link Symbol})
 * as a primitive or an object
 *
 * @see StringOrBooleanOrBigIntOrSymbol
 */
export type StringOrBooleanOrBigIntOrSymbolOrObject<T extends | string | boolean | bigint | symbol = | string | boolean | bigint | symbol, > = | T | String | Boolean | BigInt | Symbol

//#endregion -------------------- mixed (or object - quadruple) --------------------
//#region -------------------- mixed (template - double) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see StringOrNumeric
 */
export type StringOrNumericTemplate<T extends string | number | bigint = string | number | bigint, > = `${T}`
/**
 * A type-alias for a value ({@link String} or {@link Number})
 * as a {@link String} template
 *
 * @see Template
 * @see StringOrNumber
 */
export type StringOrNumberTemplate<T extends | string | number = | string | number, > = `${T}`
/**
 * A type-alias for a value ({@link String} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Template
 * @see StringOrBigInt
 */
export type StringOrBigIntTemplate<T extends | string | bigint = | string | bigint, > = `${T}`
/**
 * A type-alias for a value ({@link String} or {@link Boolean})
 * as a {@link String} template
 *
 * @see Template
 * @see StringOrBoolean
 */
export type StringOrBooleanTemplate<T extends | string | boolean = | string | boolean, > = `${T}`
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see BooleanOrNumeric
 */
export type BooleanOrNumericTemplate<T extends | boolean | number | bigint = | boolean | number | bigint, > = `${T}`
/**
 * A type-alias for a value ({@link Boolean} or {@link Number})
 * as a {@link String} template
 *
 * @see Template
 * @see BooleanOrNumber
 */
export type BooleanOrNumberTemplate<T extends | boolean | number = | boolean | number, > = `${T}`
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Template
 * @see BooleanOrBigInt
 */
export type BooleanOrBigIntTemplate<T extends | boolean | bigint = | boolean | bigint, > = `${T}`

//#endregion -------------------- mixed (template - double) --------------------
//#region -------------------- mixed (template - triple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see StringOrBooleanOrNumeric
 */
export type StringOrBooleanOrNumericTemplate<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = `${T}`
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Number})
 * as a {@link String} template
 *
 * @see Template
 * @see StringOrBooleanOrNumber
 */
export type StringOrBooleanOrNumberTemplate<T extends | string | boolean | number = | string | boolean | number, > = `${T}`
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link BigInt})
 * as a {@link String} template
 *
 * @see Template
 * @see StringOrBooleanOrBigInt
 */
export type StringOrBooleanOrBigIntTemplate<T extends | string | boolean | bigint = | string | boolean | bigint, > = `${T}`

//#endregion -------------------- mixed (template - triple) --------------------
//#region -------------------- mixed (or template - double) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see StringOrNumeric
 * @see TemplateOrStringOrNumericOrObject
 */
export type TemplateOrStringOrNumeric<T extends string | number | bigint = string | number | bigint, > = | T | `${T}`
/**
 * A type-alias for a value ({@link String} or {@link Number})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see StringOrNumber
 * @see TemplateOrStringOrNumberOrObject
 */
export type TemplateOrStringOrNumber<T extends | string | number = | string | number, > = | T | `${T}`
/**
 * A type-alias for a value ({@link String} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see StringOrBigInt
 * @see TemplateOrStringOrBigIntOrObject
 */
export type TemplateOrStringOrBigInt<T extends | string | bigint = | string | bigint, > = | T | `${T}`
/**
 * A type-alias for a value ({@link String} or {@link Boolean})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see StringOrBoolean
 * @see TemplateOrStringOrBooleanOrObject
 */
export type TemplateOrStringOrBoolean<T extends | string | boolean = | string | boolean, > = | T | `${T}`
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see BooleanOrNumeric
 * @see TemplateOrBooleanOrNumericOrObject
 */
export type TemplateOrBooleanOrNumeric<T extends | boolean | number | bigint = | boolean | number | bigint, > = | T | `${T}`
/**
 * A type-alias for a value ({@link Boolean} or {@link Number})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see BooleanOrNumber
 * @see TemplateOrBooleanOrNumberOrObject
 */
export type TemplateOrBooleanOrNumber<T extends | boolean | number = | boolean | number, > = | T | `${T}`
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see BooleanOrBigInt
 * @see TemplateOrBooleanOrBigIntOrObject
 */
export type TemplateOrBooleanOrBigInt<T extends | boolean | bigint = | boolean | bigint, > = | T | `${T}`

//#endregion -------------------- mixed (or template - double) --------------------
//#region -------------------- mixed (or template - triple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Numeric
 * @see Template
 * @see StringOrBooleanOrNumeric
 * @see TemplateOrStringOrBooleanOrNumericOrObject
 */
export type TemplateOrStringOrBooleanOrNumeric<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = | T | `${T}`
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Number})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see StringOrBooleanOrNumber
 * @see TemplateOrStringOrBooleanOrNumberOrObject
 */
export type TemplateOrStringOrBooleanOrNumber<T extends | string | boolean | number = | string | boolean | number, > = | T | `${T}`
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link BigInt})
 * as a primitive or a {@link String} template
 *
 * @see Template
 * @see StringOrBooleanOrBigInt
 * @see TemplateOrStringOrBooleanOrBigIntOrObject
 */
export type TemplateOrStringOrBooleanOrBigInt<T extends | string | boolean | bigint = | string | boolean | bigint, > = | T | `${T}`

//#endregion -------------------- mixed (or template - triple) --------------------
//#region -------------------- mixed (or object or template - double) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Numeric
 * @see Template
 * @see StringOrNumeric
 */
export type TemplateOrStringOrNumericOrObject<T extends string | number | bigint = string | number | bigint, > = | T | `${T}` | String | Number | BigInt
/**
 * A type-alias for a value ({@link String} or {@link Number})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see StringOrNumber
 */
export type TemplateOrStringOrNumberOrObject<T extends | string | number = | string | number, > = | T | `${T}` | String | Number
/**
 * A type-alias for a value ({@link String} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see StringOrBigInt
 */
export type TemplateOrStringOrBigIntOrObject<T extends | string | bigint = | string | bigint, > = | T | `${T}` | String | BigInt
/**
 * A type-alias for a value ({@link String} or {@link Boolean})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see StringOrBoolean
 */
export type TemplateOrStringOrBooleanOrObject<T extends | string | boolean = | string | boolean, > = | T | `${T}` | String | Boolean
/**
 * A type-alias for a value ({@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Numeric
 * @see Template
 * @see BooleanOrNumeric
 */
export type TemplateOrBooleanOrNumericOrObject<T extends | boolean | number | bigint = | boolean | number | bigint, > = | T | `${T}` | Boolean | Number | BigInt
/**
 * A type-alias for a value ({@link Boolean} or {@link Number})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see BooleanOrNumber
 */
export type TemplateOrBooleanOrNumberOrObject<T extends | boolean | number = | boolean | number, > = | T | `${T}` | Boolean | Number
/**
 * A type-alias for a value ({@link Boolean} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see BooleanOrBigInt
 */
export type TemplateOrBooleanOrBigIntOrObject<T extends | boolean | bigint = | boolean | bigint, > = | T | `${T}` | Boolean | BigInt

//#endregion -------------------- mixed (or object or template - double) --------------------
//#region -------------------- mixed (or object or template - triple) --------------------

/**
 * A type-alias for a value ({@link String}, {@link Boolean}, {@link Number} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Numeric
 * @see Template
 * @see StringOrBooleanOrNumeric
 */
export type TemplateOrStringOrBooleanOrNumericOrObject<T extends | string | boolean | number | bigint = | string | boolean | number | bigint, > = | T | `${T}` | String | Boolean | Number | BigInt
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link Number})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see StringOrBooleanOrNumber
 */
export type TemplateOrStringOrBooleanOrNumberOrObject<T extends | string | boolean | number = | string | boolean | number, > = | T | `${T}` | String | Boolean | Number
/**
 * A type-alias for a value ({@link String}, {@link Boolean} or {@link BigInt})
 * as a primitive, a {@link String} template or an object
 *
 * @see Template
 * @see StringOrBooleanOrBigInt
 */
export type TemplateOrStringOrBooleanOrBigIntOrObject<T extends | string | boolean | bigint = | string | boolean | bigint, > = | T | `${T}` | String | Boolean | BigInt

//#endregion -------------------- mixed (or object or template - triple) --------------------
