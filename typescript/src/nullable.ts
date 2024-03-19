/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Numeric} from "./numeric"

//#region -------------------- null/undefined --------------------

/**
 * A type-alias for <b>null</b> in a {@link String} template
 *
 * @see NullOrUndefinedTemplate
 */
export type NullTemplate<T extends null = null, > = `${T}`
/**
 * A type-alias for <b>undefined</b> in a {@link String} template
 *
 * @see NullOrUndefinedTemplate
 */
export type UndefinedTemplate<T extends undefined = undefined, > = `${T}`

/** A type-alias for <b>null</b> or <b>undefined</b> */
export type NullOrUndefined = | null | undefined
/**
 * A type-alias for <b>null</b> or <b>undefined</b> in a {@link String} template
 *
 * @see NullTemplate
 * @see UndefinedTemplate
 */
export type NullOrUndefinedTemplate<T extends NullOrUndefined = NullOrUndefined, > = `${T}`

//#endregion -------------------- null/undefined --------------------
//#region -------------------- value --------------------

/**
 * A type-alias of a value or <b>null</b>
 *
 * @see Nullable
 */
export type NullOr<T, > = | T | null
/**
 * A type-alias of a value or <b>undefined</b>
 *
 * @see Nullable
 */
export type UndefinedOr<T, > = | T | undefined
/**
 * A type-alias of a value, <b>null</b> or <b>undefined</b>
 *
 * @see NullOr
 * @see UndefinedOr
 */
export type Nullable<T, > = | T | null | undefined

//#endregion -------------------- value --------------------
//#region -------------------- true --------------------

/**
 * A type-alias for as <b>true</b> or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrBoolean
 * @see NullableTrue
 */
export type UndefinedOrTrue<T extends true = true, > = | T | undefined
/**
 * A type-alias for <b>true</b> or <b>null</b>
 *
 * @see NullOr
 * @see NullOrBoolean
 * @see NullableTrue
 */
export type NullOrTrue<T extends true = true, > = | T | null
/**
 * A type-alias for <b>true</b>, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableBoolean
 * @see UndefinedOrTrue
 * @see NullOrTrue
 */
export type NullableTrue<T extends true = true, > = | T | null | undefined

//#endregion -------------------- true --------------------
//#region -------------------- false --------------------

/**
 * A type-alias for <b>false</b> or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrBoolean
 * @see NullableFalse
 */
export type UndefinedOrFalse<T extends false = false, > = | T | undefined
/**
 * A type-alias for <b>false</b> or <b>null</b>
 *
 * @see NullOr
 * @see NullOrBoolean
 * @see NullableFalse
 */
export type NullOrFalse<T extends false = false, > = | T | null
/**
 * A type-alias for <b>false</b>, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableBoolean
 * @see UndefinedOrFalse
 * @see NullOrFalse
 */
export type NullableFalse<T extends false = false, > = | T | null | undefined

//#endregion -------------------- false --------------------
//#region -------------------- boolean --------------------

/**
 * A type-alias for a {@link Boolean} or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrTrue
 * @see UndefinedOrFalse
 * @see NullableBoolean
 */
export type UndefinedOrBoolean<T extends boolean = boolean, > = | T | undefined
/**
 * A type-alias for a {@link Boolean} or <b>null</b>
 *
 * @see NullOr
 * @see NullOrTrue
 * @see NullOrFalse
 * @see NullableBoolean
 */
export type NullOrBoolean<T extends boolean = boolean, > = | T | null
/**
 * A type-alias for a {@link Boolean}, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableTrue
 * @see NullableFalse
 * @see UndefinedOrBoolean
 * @see NullOrBoolean
 */
export type NullableBoolean<T extends boolean = boolean, > = | T | null | undefined

//#endregion -------------------- boolean --------------------
//#region -------------------- string --------------------

/**
 * A type-alias for a {@link String} or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see NullableString
 */
export type UndefinedOrString<T extends string = string, > = | T | undefined
/**
 * A type-alias for a {@link String} or <b>null</b>
 *
 * @see NullOr
 * @see NullableString
 */
export type NullOrString<T extends string = string, > = | T | null
/**
 * A type-alias for a {@link String}, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see UndefinedOrString
 * @see NullOrString
 */
export type NullableString<T extends string = string, > = | T | null | undefined

//#endregion -------------------- string --------------------
//#region -------------------- number --------------------

/**
 * A type-alias of a {@link Number} or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see NullableNumber
 */
export type UndefinedOrNumber<T extends number = number, > = | T | undefined
/**
 * A type-alias of a {@link Number} or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullableNumber
 */
export type NullOrNumber<T extends number = number, > = | T | null
/**
 * A type-alias of a {@link Number}, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see UndefinedOrNumber
 * @see NullOrNumber
 */
export type NullableNumber<T extends number = number, > = | T | null | undefined

//#endregion -------------------- number --------------------
//#region -------------------- bigint --------------------

/**
 * A type-alias of a {@link BigInt} or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see NullableBigInt
 */
export type UndefinedOrBigInt<T extends bigint = bigint, > = | T | undefined
/**
 * A type-alias of a {@link BigInt} or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullableBigInt
 */
export type NullOrBigInt<T extends bigint = bigint, > = | T | null
/**
 * A type-alias of a {@link BigInt}, <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see UndefinedOrBigInt
 * @see NullOrBigInt
 */
export type NullableBigInt<T extends bigint = bigint, > = | T | null | undefined

//#endregion -------------------- bigint --------------------
//#region -------------------- numeric --------------------

/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt}) or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumber
 * @see UndefinedOrBigInt
 * @see NullableNumeric
 */
export type UndefinedOrNumeric<T extends Numeric = Numeric, > = | T | undefined
/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt}) or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumber
 * @see NullOrBigInt
 * @see NullableNumeric
 */
export type NullOrNumeric<T extends Numeric = Numeric, > = | T | null
/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt}), <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumber
 * @see NullableBigInt
 * @see UndefinedOrNumeric
 * @see NullOrNumeric
 */
export type NullableNumeric<T extends Numeric = Numeric, > = | T | null | undefined

//#endregion -------------------- numeric --------------------
