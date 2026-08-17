//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Numeric}                            from "./numeric"
import type {JavascriptSymbol, TypescriptSymbol} from "./symbol"

/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 value
 *
 * @see import('collection').Array
 * @see BooleanArrayOf1
 * @see NumericArrayOf1
 * @see NumberArrayOf1
 * @see BigIntArrayOf1
 * @see StringArrayOf1
 * @see SymbolArrayOf1
 * @see JavascriptSymbolArrayOf1
 * @see TypescriptSymbolArrayOf1
 */
export type ArrayOf1<T, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 values
 *
 * @see import('collection').Array
 * @see BooleanArrayOf2
 * @see NumericArrayOf2
 * @see NumberArrayOf2
 * @see BigIntArrayOf2
 * @see StringArrayOf2
 * @see SymbolArrayOf2
 * @see JavascriptSymbolArrayOf2
 * @see TypescriptSymbolArrayOf2
 */
export type ArrayOf2<T, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf3
 * @see NumericArrayOf3
 * @see NumberArrayOf3
 * @see BigIntArrayOf3
 * @see StringArrayOf3
 * @see SymbolArrayOf3
 * @see JavascriptSymbolArrayOf3
 * @see TypescriptSymbolArrayOf3
 */
export type ArrayOf3<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf4
 * @see NumericArrayOf4
 * @see NumberArrayOf4
 * @see BigIntArrayOf4
 * @see StringArrayOf4
 * @see SymbolArrayOf4
 * @see JavascriptSymbolArrayOf4
 * @see TypescriptSymbolArrayOf4
 */
export type ArrayOf4<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf5
 * @see NumericArrayOf5
 * @see NumberArrayOf5
 * @see BigIntArrayOf5
 * @see StringArrayOf5
 * @see SymbolArrayOf5
 * @see JavascriptSymbolArrayOf5
 * @see TypescriptSymbolArrayOf5
 */
export type ArrayOf5<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf6
 * @see NumericArrayOf6
 * @see NumberArrayOf6
 * @see BigIntArrayOf6
 * @see StringArrayOf6
 * @see SymbolArrayOf6
 * @see JavascriptSymbolArrayOf6
 * @see TypescriptSymbolArrayOf6
 */
export type ArrayOf6<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf7
 * @see NumericArrayOf7
 * @see NumberArrayOf7
 * @see BigIntArrayOf7
 * @see StringArrayOf7
 * @see SymbolArrayOf7
 * @see JavascriptSymbolArrayOf7
 * @see TypescriptSymbolArrayOf7
 */
export type ArrayOf7<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf8
 * @see NumericArrayOf8
 * @see NumberArrayOf8
 * @see BigIntArrayOf8
 * @see StringArrayOf8
 * @see SymbolArrayOf8
 * @see JavascriptSymbolArrayOf8
 * @see TypescriptSymbolArrayOf8
 */
export type ArrayOf8<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf9
 * @see NumericArrayOf9
 * @see NumberArrayOf9
 * @see BigIntArrayOf9
 * @see StringArrayOf9
 * @see SymbolArrayOf9
 * @see JavascriptSymbolArrayOf9
 * @see TypescriptSymbolArrayOf9
 */
export type ArrayOf9<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link Boolean}
 *
 * @see import('collection').Array
 * @see BooleanArrayOf10
 * @see NumericArrayOf10
 * @see NumberArrayOf10
 * @see BigIntArrayOf10
 * @see StringArrayOf10
 * @see SymbolArrayOf10
 * @see JavascriptSymbolArrayOf10
 * @see TypescriptSymbolArrayOf10
 */
export type ArrayOf10<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf1
 */
export type BooleanArrayOf1<T extends boolean = boolean, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf2
 */
export type BooleanArrayOf2<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf3
 */
export type BooleanArrayOf3<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf4
 */
export type BooleanArrayOf4<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf5
 */
export type BooleanArrayOf5<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf6
 */
export type BooleanArrayOf6<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf7
 */
export type BooleanArrayOf7<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf8
 */
export type BooleanArrayOf8<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf9
 */
export type BooleanArrayOf9<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link Boolean}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BooleanArray
 * @see ArrayOf10
 */
export type BooleanArrayOf10<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf1
 * @see NumberArrayOf1
 * @see BigIntArrayOf1
 */
export type NumericArrayOf1<T extends Numeric = Numeric, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf2
 * @see NumberArrayOf2
 * @see BigIntArrayOf3
 */
export type NumericArrayOf2<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf3
 * @see NumberArrayOf3
 * @see BigIntArrayOf3
 */
export type NumericArrayOf3<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf4
 * @see NumberArrayOf4
 * @see BigIntArrayOf4
 */
export type NumericArrayOf4<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf5
 * @see NumberArrayOf5
 * @see BigIntArrayOf5
 */
export type NumericArrayOf5<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf6
 * @see NumberArrayOf6
 * @see BigIntArrayOf6
 */
export type NumericArrayOf6<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf7
 * @see NumberArrayOf7
 * @see BigIntArrayOf7
 */
export type NumericArrayOf7<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf8
 * @see NumberArrayOf8
 * @see BigIntArrayOf8
 */
export type NumericArrayOf8<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf9
 * @see NumberArrayOf9
 * @see BigIntArrayOf9
 */
export type NumericArrayOf9<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link Number} or {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumericArray
 * @see ArrayOf10
 * @see NumberArrayOf10
 * @see BigIntArrayOf10
 */
export type NumericArrayOf10<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf1
 * @see NumberArrayOf1
 * @see BigIntArrayOf1
 */
export type NumberArrayOf1<T extends number = number, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf2
 * @see NumberArrayOf2
 * @see BigIntArrayOf3
 */
export type NumberArrayOf2<T extends number = number, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf3
 * @see NumberArrayOf3
 * @see BigIntArrayOf3
 */
export type NumberArrayOf3<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf4
 * @see NumberArrayOf4
 * @see BigIntArrayOf4
 */
export type NumberArrayOf4<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf5
 * @see NumberArrayOf5
 * @see BigIntArrayOf5
 */
export type NumberArrayOf5<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf6
 * @see NumberArrayOf6
 * @see BigIntArrayOf6
 */
export type NumberArrayOf6<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf7
 * @see NumberArrayOf7
 * @see BigIntArrayOf7
 */
export type NumberArrayOf7<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf8
 * @see NumberArrayOf8
 * @see BigIntArrayOf8
 */
export type NumberArrayOf8<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf9
 * @see NumberArrayOf9
 * @see BigIntArrayOf9
 */
export type NumberArrayOf9<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link Number}
 *
 * @see import('collection').Array
 * @see import('collection (array)').NumberArray
 * @see ArrayOf10
 * @see NumberArrayOf10
 * @see BigIntArrayOf10
 */
export type NumberArrayOf10<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf1
 * @see BigIntArrayOf1
 * @see BigIntArrayOf1
 */
export type BigIntArrayOf1<T extends bigint = bigint, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf2
 * @see BigIntArrayOf2
 * @see BigIntArrayOf3
 */
export type BigIntArrayOf2<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf3
 * @see BigIntArrayOf3
 * @see BigIntArrayOf3
 */
export type BigIntArrayOf3<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf4
 * @see BigIntArrayOf4
 * @see BigIntArrayOf4
 */
export type BigIntArrayOf4<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf5
 * @see BigIntArrayOf5
 * @see BigIntArrayOf5
 */
export type BigIntArrayOf5<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf6
 * @see BigIntArrayOf6
 * @see BigIntArrayOf6
 */
export type BigIntArrayOf6<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf7
 * @see BigIntArrayOf7
 * @see BigIntArrayOf7
 */
export type BigIntArrayOf7<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf8
 * @see BigIntArrayOf8
 * @see BigIntArrayOf8
 */
export type BigIntArrayOf8<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf9
 * @see BigIntArrayOf9
 * @see BigIntArrayOf9
 */
export type BigIntArrayOf9<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link BigInt}
 *
 * @see import('collection').Array
 * @see import('collection (array)').BigIntArray
 * @see ArrayOf10
 * @see BigIntArrayOf10
 * @see BigIntArrayOf10
 */
export type BigIntArrayOf10<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf1
 * @see JavascriptSymbolArrayOf1
 * @see TypescriptSymbolArrayOf1
 */
export type SymbolArrayOf1<T extends Symbol = Symbol, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf2
 * @see JavascriptSymbolArrayOf2
 * @see TypescriptSymbolArrayOf3
 */
export type SymbolArrayOf2<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf3
 * @see JavascriptSymbolArrayOf3
 * @see TypescriptSymbolArrayOf3
 */
export type SymbolArrayOf3<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf4
 * @see JavascriptSymbolArrayOf4
 * @see TypescriptSymbolArrayOf4
 */
export type SymbolArrayOf4<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf5
 * @see JavascriptSymbolArrayOf5
 * @see TypescriptSymbolArrayOf5
 */
export type SymbolArrayOf5<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf6
 * @see JavascriptSymbolArrayOf6
 * @see TypescriptSymbolArrayOf6
 */
export type SymbolArrayOf6<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf7
 * @see JavascriptSymbolArrayOf7
 * @see TypescriptSymbolArrayOf7
 */
export type SymbolArrayOf7<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf8
 * @see JavascriptSymbolArrayOf8
 * @see TypescriptSymbolArrayOf8
 */
export type SymbolArrayOf8<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf9
 * @see JavascriptSymbolArrayOf9
 * @see TypescriptSymbolArrayOf9
 */
export type SymbolArrayOf9<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').SymbolArray
 * @see ArrayOf10
 * @see JavascriptSymbolArrayOf10
 * @see TypescriptSymbolArrayOf10
 */
export type SymbolArrayOf10<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf1
 * @see JavascriptSymbolArrayOf1
 * @see TypescriptSymbolArrayOf1
 */
export type JavascriptSymbolArrayOf1<T extends JavascriptSymbol = JavascriptSymbol, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf2
 * @see JavascriptSymbolArrayOf2
 * @see TypescriptSymbolArrayOf3
 */
export type JavascriptSymbolArrayOf2<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf3
 * @see JavascriptSymbolArrayOf3
 * @see TypescriptSymbolArrayOf3
 */
export type JavascriptSymbolArrayOf3<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf4
 * @see JavascriptSymbolArrayOf4
 * @see TypescriptSymbolArrayOf4
 */
export type JavascriptSymbolArrayOf4<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf5
 * @see JavascriptSymbolArrayOf5
 * @see TypescriptSymbolArrayOf5
 */
export type JavascriptSymbolArrayOf5<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf6
 * @see JavascriptSymbolArrayOf6
 * @see TypescriptSymbolArrayOf6
 */
export type JavascriptSymbolArrayOf6<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf7
 * @see JavascriptSymbolArrayOf7
 * @see TypescriptSymbolArrayOf7
 */
export type JavascriptSymbolArrayOf7<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf8
 * @see JavascriptSymbolArrayOf8
 * @see TypescriptSymbolArrayOf8
 */
export type JavascriptSymbolArrayOf8<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf9
 * @see JavascriptSymbolArrayOf9
 * @see TypescriptSymbolArrayOf9
 */
export type JavascriptSymbolArrayOf9<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 official Javascript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').JavascriptSymbolArray
 * @see ArrayOf10
 * @see JavascriptSymbolArrayOf10
 * @see TypescriptSymbolArrayOf10
 */
export type JavascriptSymbolArrayOf10<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link ReadonlyArray Array} of 1 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf1
 * @see TypescriptSymbolArrayOf1
 * @see TypescriptSymbolArrayOf1
 */
export type TypescriptSymbolArrayOf1<T extends TypescriptSymbol = TypescriptSymbol, > = readonly [T,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 2 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf2
 * @see TypescriptSymbolArrayOf2
 * @see TypescriptSymbolArrayOf3
 */
export type TypescriptSymbolArrayOf2<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, > = readonly [T1, T2,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 3 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf3
 * @see TypescriptSymbolArrayOf3
 * @see TypescriptSymbolArrayOf3
 */
export type TypescriptSymbolArrayOf3<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = readonly [T1, T2, T3,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 4 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf4
 * @see TypescriptSymbolArrayOf4
 * @see TypescriptSymbolArrayOf4
 */
export type TypescriptSymbolArrayOf4<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = readonly [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 5 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf5
 * @see TypescriptSymbolArrayOf5
 * @see TypescriptSymbolArrayOf5
 */
export type TypescriptSymbolArrayOf5<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = readonly [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 6 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf6
 * @see TypescriptSymbolArrayOf6
 * @see TypescriptSymbolArrayOf6
 */
export type TypescriptSymbolArrayOf6<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 7 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf7
 * @see TypescriptSymbolArrayOf7
 * @see TypescriptSymbolArrayOf7
 */
export type TypescriptSymbolArrayOf7<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 8 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf8
 * @see TypescriptSymbolArrayOf8
 * @see TypescriptSymbolArrayOf8
 */
export type TypescriptSymbolArrayOf8<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 9 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf9
 * @see TypescriptSymbolArrayOf9
 * @see TypescriptSymbolArrayOf9
 */
export type TypescriptSymbolArrayOf9<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link ReadonlyArray Array} of 10 official Typescript {@link Symbol}
 *
 * @see import('collection').Array
 * @see import('collection (array)').TypescriptSymbolArray
 * @see ArrayOf10
 * @see TypescriptSymbolArrayOf10
 * @see TypescriptSymbolArrayOf10
 */
export type TypescriptSymbolArrayOf10<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = readonly [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]
