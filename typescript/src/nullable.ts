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

import type {Numeric}                                  from "./numeric"
import type {Zero, ZeroBigInt, ZeroNumber}             from "./numeric (0)"
import type {One, OneBigInt, OneNumber}                from "./numeric (1)"
import type {Two, TwoBigInt, TwoNumber}                from "./numeric (2)"
import type {MinusOne, MinusOneBigInt, MinusOneNumber} from "./numeric (-1)"
import type {JavascriptSymbol, TypescriptSymbol}       from "./symbol"

//#region -------------------- null/undefined --------------------

/** A type-alias for <b>null</b> or <b>undefined</b> */
export type NullOrUndefined = | null | undefined

/**
 * A type-alias for <b>null</b> in a {@link String} template
 *
 * @see Template
 * @see NullableTemplate
 */
export type NullTemplate<T extends null = null, > = `${T}`
/**
 * A type-alias for <b>undefined</b> in a {@link String} template
 *
 * @see Template
 * @see NullableTemplate
 */
export type UndefinedTemplate<T extends undefined = undefined, > = `${T}`
/**
 * A type-alias for <b>null</b> or <b>undefined</b> in a {@link String} template
 *
 * @see Template
 * @see NullTemplate
 * @see UndefinedTemplate
 */
export type NullableTemplate<T extends NullOrUndefined = NullOrUndefined, > = `${T}`

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
//#region -------------------- -1 --------------------

/**
 * A type-alias of the value <b>-1</b> (as a {@link Number} or {@link BigInt})
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrMinusOneNumber
 * @see UndefinedOrMinusOneBigInt
 * @see NullableMinusOne
 */
export type UndefinedOrMinusOne<T extends MinusOne = MinusOne, > = | T | undefined
/**
 * A type-alias of the {@link Number} <b>-1</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrNumber
 * @see UndefinedOrMinusOne
 * @see NullableMinusOne
 * @see NullableMinusOneNumber
 */
export type UndefinedOrMinusOneNumber<T extends MinusOneNumber = MinusOneNumber, > = | T | undefined
/**
 * A type-alias of the {@link BigInt} <b>-1</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrBigInt
 * @see UndefinedOrMinusOne
 * @see NullableMinusOne
 * @see NullableMinusOneBigInt
 */
export type UndefinedOrMinusOneBigInt<T extends MinusOneBigInt = MinusOneBigInt, > = | T | undefined

/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt})
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrMinusOneNumber
 * @see NullOrMinusOneBigInt
 * @see NullableMinusOne
 */
export type NullOrMinusOne<T extends MinusOne = MinusOne, > = | T | null
/**
 * A type-alias of the {@link Number} <b>-1</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrNumber
 * @see NullOrMinusOne
 * @see NullableMinusOne
 * @see NullableMinusOneNumber
 */
export type NullOrMinusOneNumber<T extends MinusOneNumber = MinusOneNumber, > = | T | null
/**
 * A type-alias of the {@link BigInt} <b>-1</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrBigInt
 * @see NullOrMinusOne
 * @see NullableMinusOne
 * @see NullableMinusOneBigInt
 */
export type NullOrMinusOneBigInt<T extends MinusOneBigInt = MinusOneBigInt, > = | T | null

/**
 * A type-alias of the value <b>-1</b> (as a {@link Number} or {@link BigInt}),
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableMinusOneNumber
 * @see NullableMinusOneBigInt
 * @see UndefinedOrMinusOne
 * @see NullOrMinusOne
 */
export type NullableMinusOne<T extends MinusOne = MinusOne, > = | T | null | undefined
/**
 * A type-alias of the {@link Number} <b>-1</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableNumber
 * @see NullableMinusOne
 * @see UndefinedOrMinusOne
 * @see UndefinedOrMinusOneNumber
 * @see NullOrMinusOne
 * @see NullOrMinusOneNumber
 */
export type NullableMinusOneNumber<T extends MinusOneNumber = MinusOneNumber, > = | T | null | undefined
/**
 * A type-alias of the {@link BigInt} <b>-1</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableBigInt
 * @see NullableMinusOne
 * @see UndefinedOrMinusOne
 * @see UndefinedOrMinusOneBigInt
 * @see NullOrMinusOne
 * @see NullOrMinusOneBigInt
 */
export type NullableMinusOneBigInt<T extends MinusOneBigInt = MinusOneBigInt, > = | T | null | undefined

//#endregion -------------------- -1 --------------------
//#region -------------------- 0 --------------------

/**
 * A type-alias of the value <b>0</b> (as a {@link Number} or {@link BigInt})
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrZeroNumber
 * @see UndefinedOrZeroBigInt
 * @see NullableZero
 */
export type UndefinedOrZero<T extends Zero = Zero, > = | T | undefined
/**
 * A type-alias of the {@link Number} <b>0</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrNumber
 * @see UndefinedOrZero
 * @see NullableZero
 * @see NullableZeroNumber
 */
export type UndefinedOrZeroNumber<T extends ZeroNumber = ZeroNumber, > = | T | undefined
/**
 * A type-alias of the {@link BigInt} <b>0</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrBigInt
 * @see UndefinedOrZero
 * @see NullableZero
 * @see NullableZeroBigInt
 */
export type UndefinedOrZeroBigInt<T extends ZeroBigInt = ZeroBigInt, > = | T | undefined

/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt})
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrZeroNumber
 * @see NullOrZeroBigInt
 * @see NullableZero
 */
export type NullOrZero<T extends Zero = Zero, > = | T | null
/**
 * A type-alias of the {@link Number} <b>0</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrNumber
 * @see NullOrZero
 * @see NullableZero
 * @see NullableZeroNumber
 */
export type NullOrZeroNumber<T extends ZeroNumber = ZeroNumber, > = | T | null
/**
 * A type-alias of the {@link BigInt} <b>0</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrBigInt
 * @see NullOrZero
 * @see NullableZero
 * @see NullableZeroBigInt
 */
export type NullOrZeroBigInt<T extends ZeroBigInt = ZeroBigInt, > = | T | null

/**
 * A type-alias of the value <b>0</b> (as a {@link Number} or {@link BigInt}),
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableZeroNumber
 * @see NullableZeroBigInt
 * @see UndefinedOrZero
 * @see NullOrZero
 */
export type NullableZero<T extends Zero = Zero, > = | T | null | undefined
/**
 * A type-alias of the {@link Number} <b>0</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableNumber
 * @see NullableZero
 * @see UndefinedOrZero
 * @see UndefinedOrZeroNumber
 * @see NullOrZero
 * @see NullOrZeroNumber
 */
export type NullableZeroNumber<T extends ZeroNumber = ZeroNumber, > = | T | null | undefined
/**
 * A type-alias of the {@link BigInt} <b>0</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableBigInt
 * @see NullableZero
 * @see UndefinedOrZero
 * @see UndefinedOrZeroBigInt
 * @see NullOrZero
 * @see NullOrZeroBigInt
 */
export type NullableZeroBigInt<T extends ZeroBigInt = ZeroBigInt, > = | T | null | undefined

//#endregion -------------------- 0 --------------------
//#region -------------------- 1 --------------------

/**
 * A type-alias of the value <b>1</b> (as a {@link Number} or {@link BigInt})
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrOneNumber
 * @see UndefinedOrOneBigInt
 * @see NullableOne
 */
export type UndefinedOrOne<T extends One = One, > = | T | undefined
/**
 * A type-alias of the {@link Number} <b>1</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrNumber
 * @see UndefinedOrOne
 * @see NullableOne
 * @see NullableOneNumber
 */
export type UndefinedOrOneNumber<T extends OneNumber = OneNumber, > = | T | undefined
/**
 * A type-alias of the {@link BigInt} <b>1</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrBigInt
 * @see UndefinedOrOne
 * @see NullableOne
 * @see NullableOneBigInt
 */
export type UndefinedOrOneBigInt<T extends OneBigInt = OneBigInt, > = | T | undefined

/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt})
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrOneNumber
 * @see NullOrOneBigInt
 * @see NullableOne
 */
export type NullOrOne<T extends One = One, > = | T | null
/**
 * A type-alias of the {@link Number} <b>1</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrNumber
 * @see NullOrOne
 * @see NullableOne
 * @see NullableOneNumber
 */
export type NullOrOneNumber<T extends OneNumber = OneNumber, > = | T | null
/**
 * A type-alias of the {@link BigInt} <b>1</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrBigInt
 * @see NullOrOne
 * @see NullableOne
 * @see NullableOneBigInt
 */
export type NullOrOneBigInt<T extends OneBigInt = OneBigInt, > = | T | null

/**
 * A type-alias of the value <b>1</b> (as a {@link Number} or {@link BigInt}),
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableOneNumber
 * @see NullableOneBigInt
 * @see UndefinedOrOne
 * @see NullOrOne
 */
export type NullableOne<T extends One = One, > = | T | null | undefined
/**
 * A type-alias of the {@link Number} <b>1</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableNumber
 * @see NullableOne
 * @see UndefinedOrOne
 * @see UndefinedOrOneNumber
 * @see NullOrOne
 * @see NullOrOneNumber
 */
export type NullableOneNumber<T extends OneNumber = OneNumber, > = | T | null | undefined
/**
 * A type-alias of the {@link BigInt} <b>1</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableBigInt
 * @see NullableOne
 * @see UndefinedOrOne
 * @see UndefinedOrOneBigInt
 * @see NullOrOne
 * @see NullOrOneBigInt
 */
export type NullableOneBigInt<T extends OneBigInt = OneBigInt, > = | T | null | undefined

//#endregion -------------------- 1 --------------------
//#region -------------------- 2 --------------------

/**
 * A type-alias of the value <b>2</b> (as a {@link Number} or {@link BigInt})
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrTwoNumber
 * @see UndefinedOrTwoBigInt
 * @see NullableTwo
 */
export type UndefinedOrTwo<T extends Two = Two, > = | T | undefined
/**
 * A type-alias of the {@link Number} <b>2</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrNumber
 * @see UndefinedOrTwo
 * @see NullableTwo
 * @see NullableTwoNumber
 */
export type UndefinedOrTwoNumber<T extends TwoNumber = TwoNumber, > = | T | undefined
/**
 * A type-alias of the {@link BigInt} <b>2</b>
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrNumeric
 * @see UndefinedOrBigInt
 * @see UndefinedOrTwo
 * @see NullableTwo
 * @see NullableTwoBigInt
 */
export type UndefinedOrTwoBigInt<T extends TwoBigInt = TwoBigInt, > = | T | undefined

/**
 * A type-alias of a value (as a {@link Number} or {@link BigInt})
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrTwoNumber
 * @see NullOrTwoBigInt
 * @see NullableTwo
 */
export type NullOrTwo<T extends Two = Two, > = | T | null
/**
 * A type-alias of the {@link Number} <b>2</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrNumber
 * @see NullOrTwo
 * @see NullableTwo
 * @see NullableTwoNumber
 */
export type NullOrTwoNumber<T extends TwoNumber = TwoNumber, > = | T | null
/**
 * A type-alias of the {@link BigInt} <b>2</b>
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrNumeric
 * @see NullOrBigInt
 * @see NullOrTwo
 * @see NullableTwo
 * @see NullableTwoBigInt
 */
export type NullOrTwoBigInt<T extends TwoBigInt = TwoBigInt, > = | T | null

/**
 * A type-alias of the value <b>2</b> (as a {@link Number} or {@link BigInt}),
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableTwoNumber
 * @see NullableTwoBigInt
 * @see UndefinedOrTwo
 * @see NullOrTwo
 */
export type NullableTwo<T extends Two = Two, > = | T | null | undefined
/**
 * A type-alias of the {@link Number} <b>2</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableNumber
 * @see NullableTwo
 * @see UndefinedOrTwo
 * @see UndefinedOrTwoNumber
 * @see NullOrTwo
 * @see NullOrTwoNumber
 */
export type NullableTwoNumber<T extends TwoNumber = TwoNumber, > = | T | null | undefined
/**
 * A type-alias of the {@link BigInt} <b>2</b>,
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableNumeric
 * @see NullableBigInt
 * @see NullableTwo
 * @see UndefinedOrTwo
 * @see UndefinedOrTwoBigInt
 * @see NullOrTwo
 * @see NullOrTwoBigInt
 */
export type NullableTwoBigInt<T extends TwoBigInt = TwoBigInt, > = | T | null | undefined

//#endregion -------------------- 2 --------------------
//#region -------------------- symbol --------------------

/**
 * A type-alias for a {@link Symbol}
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrJavascriptSymbol
 * @see UndefinedOrTypescriptSymbol
 * @see NullableSymbol
 */
export type UndefinedOrSymbol<T extends symbol = symbol, > = | T | undefined
/**
 * A type-alias for an official Javascript {@link Symbol}
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrSymbol
 * @see JavascriptSymbol
 * @see NullableSymbol
 */
export type UndefinedOrJavascriptSymbol<T extends JavascriptSymbol = JavascriptSymbol, > = | T | undefined
/**
 * A type-alias for an official Typescript {@link Symbol}
 * or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see UndefinedOrSymbol
 * @see TypescriptSymbol
 * @see NullableSymbol
 */
export type UndefinedOrTypescriptSymbol<T extends TypescriptSymbol = TypescriptSymbol, > = | T | undefined

/**
 * A type-alias for a {@link Symbol}
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrJavascriptSymbol
 * @see NullOrTypescriptSymbol
 * @see NullableSymbol
 */
export type NullOrSymbol<T extends symbol = symbol, > = | T | null
/**
 * A type-alias for an official Javascript {@link Symbol}
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrSymbol
 * @see JavascriptSymbol
 * @see NullableSymbol
 */
export type NullOrJavascriptSymbol<T extends JavascriptSymbol = JavascriptSymbol, > = | T | null
/**
 * A type-alias for an official Typescript {@link Symbol}
 * or <b>null</b>
 *
 * @see NullOr
 * @see NullOrSymbol
 * @see TypescriptSymbol
 * @see NullableSymbol
 */
export type NullOrTypescriptSymbol<T extends TypescriptSymbol = TypescriptSymbol, > = | T | undefined

/**
 * A type-alias for a {@link Symbol},
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see NullableJavascriptSymbol
 * @see NullableTypescriptSymbol
 * @see UndefinedOrSymbol
 * @see NullOrSymbol
 */
export type NullableSymbol<T extends symbol = symbol, > = | T | null | undefined
/**
 * A type-alias for an official Javascript {@link Symbol},
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see JavascriptSymbol
 * @see UndefinedOrSymbol
 * @see UndefinedOrJavascriptSymbol
 * @see NullOrSymbol
 * @see NullOrJavascriptSymbol
 */
export type NullableJavascriptSymbol<T extends JavascriptSymbol = JavascriptSymbol, > = | T | null | undefined
/**
 * A type-alias for an official Typescript {@link Symbol}
 * <b>null</b> or <b>undefined</b>
 *
 * @see Nullable
 * @see TypescriptSymbol
 * @see UndefinedOrSymbol
 * @see UndefinedOrTypescriptSymbol
 * @see NullOrSymbol
 * @see NullOrTypescriptSymbol
 */
export type NullableTypescriptSymbol<T extends TypescriptSymbol = TypescriptSymbol, > = | T | undefined

//#endregion -------------------- symbol --------------------
//#region -------------------- unknown --------------------

/**
 * A type-alias for <b>unknown</b> or <b>undefined</b>
 *
 * @see UndefinedOr
 * @see NullableUnknown
 */
export type UndefinedOrUnknown<T extends unknown = unknown, > = | T | undefined
/**
 * A type-alias for <b>unknown</b> or <b>null</b>
 *
 * @see NullOr
 * @see NullableUnknown
 */
export type NullOrUnknown<T extends unknown = unknown, > = | T | null
/**
 * A type-alias for <b>unknown</b> or <b>null</b>
 *
 * @see Nullable
 * @see UndefinedOrUnknown
 * @see NullOrUnknown
 */
export type NullableUnknown<T extends unknown = unknown, > = | T | null | undefined

//#endregion -------------------- unknown --------------------
