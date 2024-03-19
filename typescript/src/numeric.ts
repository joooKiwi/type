/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

//#region -------------------- number --------------------

/**
 * A type-alias for a {@link Number}
 * in a {@link String} template
 *
 * @see NumericTemplate
 */
export type NumberTemplate<T extends number = number, > = `${T}`
/**
 * A type-alias for a {@link Number}
 * as a primitive or in a {@link String} template
 *
 * @see PossibleNumberOrTemplate
 * @see NumericOrTemplate
 */
export type NumberOrTemplate<T extends number = number, > = | T | `${T}`

/**
 * A type-alias for a {@link Number}
 * as a primitive or an object
 *
 * @see PossibleNumeric
 */
export type PossibleNumber<T extends number = number, > = | T | Number
/**
 * A type-alias for a {@link Number}
 * as a primitive, an object or in a {@link String} template
 *
 * @see NumberOrTemplate
 * @see PossibleNumericOrTemplate
 */
export type PossibleNumberOrTemplate<T extends number = number, > = | T | Number | `${T}`

//#endregion -------------------- number --------------------
//#region -------------------- bigint --------------------

/** A type-alias for a {@link BigInt}
 * in a {@link String} template
 *
 * @see NumericTemplate
 */
export type BigIntTemplate<T extends bigint = bigint, > = `${T}`
/**
 * A type-alias for a {@link Number}
 * as a primitive or in a {@link String} template
 *
 * @see PossibleBigIntOrTemplate
 * @see NumericOrTemplate
 */
export type BigIntOrTemplate<T extends bigint = bigint, > = | T | `${T}`

/**
 * A type-alias for a {@link BigInt}
 * as a primitive or an object
 *
 * @see PossibleNumeric
 */
export type PossibleBigInt<T extends bigint = bigint, > = | T | BigInt
/**
 * A type-alias for a {@link BigInt}
 * as a primitive, an object or in a {@link String} template
 *
 * @see BigIntOrTemplate
 * @see PossibleNumericOrTemplate
 */
export type PossibleBigIntOrTemplate<T extends bigint = bigint, > = | T | BigInt | `${T}`

//#endregion -------------------- bigint --------------------
//#region -------------------- numeric --------------------

/** A type-alias for a {@link Number} or a {@link BigInt} as a primitive */
export type Numeric<T extends | number | bigint = | number | bigint, > = T
/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * in a {@link String} template
 *
 * @see Numeric
 * @see NumberTemplate
 * @see BigIntTemplate
 */
export type NumericTemplate<T extends Numeric = Numeric, > = `${T}`
/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive or in a {@link String} template
 *
 * @see Numeric
 * @see NumberOrTemplate
 * @see BigIntOrTemplate
 * @see PossibleNumericOrTemplate
 */
export type NumericOrTemplate<T extends Numeric = Numeric, > = | T | `${T}`

/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see Numeric
 * @see PossibleNumber
 * @see PossibleBigInt
 */
export type PossibleNumeric<T extends Numeric = Numeric, > = | T | Numeric
/**
 * A type-alias for a value ({@link Number} or {@link BigInt})
 * as a primitive, an object or in a {@link String} template
 *
 * @see Numeric
 * @see PossibleNumberOrTemplate
 * @see PossibleBigIntOrTemplate
 * @see NumericOrTemplate
 */
export type PossibleNumericOrTemplate<T extends Numeric = Numeric, > = | T | Numeric | `${T}`

//#endregion -------------------- numeric --------------------
//#region -------------------- string --------------------

/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive
 *
 * @see Numeric
 * @see PossibleStringOrNumeric
 */
export type StringOrNumeric<T extends | string | number | bigint = | string | number | bigint, > = T
/**
 * A type-alias for a value ({@link String}, {@link Number} or {@link BigInt})
 * as a primitive or an object
 *
 * @see StringOrNumeric
 */
export type PossibleStringOrNumeric<T extends StringOrNumeric = StringOrNumeric, > = | T | String | Number | BigInt

//#endregion -------------------- string --------------------

