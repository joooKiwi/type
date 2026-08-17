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
 * A type-alias for an {@link Array MutableArray} of 1 value
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf1
 * @see MutableNumericArrayOf1
 * @see MutableNumberArrayOf1
 * @see MutableBigIntArrayOf1
 * @see MutableStringArrayOf1
 * @see MutableSymbolArrayOf1
 * @see MutableJavascriptSymbolArrayOf1
 * @see MutableTypescriptSymbolArrayOf1
 */
export type MutableArrayOf1<T, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 values
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf2
 * @see MutableNumericArrayOf2
 * @see MutableNumberArrayOf2
 * @see MutableBigIntArrayOf2
 * @see MutableStringArrayOf2
 * @see MutableSymbolArrayOf2
 * @see MutableJavascriptSymbolArrayOf2
 * @see MutableTypescriptSymbolArrayOf2
 */
export type MutableArrayOf2<T, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf3
 * @see MutableNumericArrayOf3
 * @see MutableNumberArrayOf3
 * @see MutableBigIntArrayOf3
 * @see MutableStringArrayOf3
 * @see MutableSymbolArrayOf3
 * @see MutableJavascriptSymbolArrayOf3
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableArrayOf3<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf4
 * @see MutableNumericArrayOf4
 * @see MutableNumberArrayOf4
 * @see MutableBigIntArrayOf4
 * @see MutableStringArrayOf4
 * @see MutableSymbolArrayOf4
 * @see MutableJavascriptSymbolArrayOf4
 * @see MutableTypescriptSymbolArrayOf4
 */
export type MutableArrayOf4<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf5
 * @see MutableNumericArrayOf5
 * @see MutableNumberArrayOf5
 * @see MutableBigIntArrayOf5
 * @see MutableStringArrayOf5
 * @see MutableSymbolArrayOf5
 * @see MutableJavascriptSymbolArrayOf5
 * @see MutableTypescriptSymbolArrayOf5
 */
export type MutableArrayOf5<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf6
 * @see MutableNumericArrayOf6
 * @see MutableNumberArrayOf6
 * @see MutableBigIntArrayOf6
 * @see MutableStringArrayOf6
 * @see MutableSymbolArrayOf6
 * @see MutableJavascriptSymbolArrayOf6
 * @see MutableTypescriptSymbolArrayOf6
 */
export type MutableArrayOf6<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf7
 * @see MutableNumericArrayOf7
 * @see MutableNumberArrayOf7
 * @see MutableBigIntArrayOf7
 * @see MutableStringArrayOf7
 * @see MutableSymbolArrayOf7
 * @see MutableJavascriptSymbolArrayOf7
 * @see MutableTypescriptSymbolArrayOf7
 */
export type MutableArrayOf7<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf8
 * @see MutableNumericArrayOf8
 * @see MutableNumberArrayOf8
 * @see MutableBigIntArrayOf8
 * @see MutableStringArrayOf8
 * @see MutableSymbolArrayOf8
 * @see MutableJavascriptSymbolArrayOf8
 * @see MutableTypescriptSymbolArrayOf8
 */
export type MutableArrayOf8<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf9
 * @see MutableNumericArrayOf9
 * @see MutableNumberArrayOf9
 * @see MutableBigIntArrayOf9
 * @see MutableStringArrayOf9
 * @see MutableSymbolArrayOf9
 * @see MutableJavascriptSymbolArrayOf9
 * @see MutableTypescriptSymbolArrayOf9
 */
export type MutableArrayOf9<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see MutableBooleanArrayOf10
 * @see MutableNumericArrayOf10
 * @see MutableNumberArrayOf10
 * @see MutableBigIntArrayOf10
 * @see MutableStringArrayOf10
 * @see MutableSymbolArrayOf10
 * @see MutableJavascriptSymbolArrayOf10
 * @see MutableTypescriptSymbolArrayOf10
 */
export type MutableArrayOf10<T, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link Array MutableArray} of 1 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf1
 */
export type MutableBooleanArrayOf1<T extends boolean = boolean, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf2
 */
export type MutableBooleanArrayOf2<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf3
 */
export type MutableBooleanArrayOf3<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf4
 */
export type MutableBooleanArrayOf4<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf5
 */
export type MutableBooleanArrayOf5<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf6
 */
export type MutableBooleanArrayOf6<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf7
 */
export type MutableBooleanArrayOf7<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf8
 */
export type MutableBooleanArrayOf8<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf9
 */
export type MutableBooleanArrayOf9<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link Boolean}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBooleanArray
 * @see MutableArrayOf10
 */
export type MutableBooleanArrayOf10<T extends boolean = boolean, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link Array MutableArray} of 1 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf1
 * @see MutableNumberArrayOf1
 * @see MutableBigIntArrayOf1
 */
export type MutableNumericArrayOf1<T extends Numeric = Numeric, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf2
 * @see MutableNumberArrayOf2
 * @see MutableBigIntArrayOf3
 */
export type MutableNumericArrayOf2<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf3
 * @see MutableNumberArrayOf3
 * @see MutableBigIntArrayOf3
 */
export type MutableNumericArrayOf3<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf4
 * @see MutableNumberArrayOf4
 * @see MutableBigIntArrayOf4
 */
export type MutableNumericArrayOf4<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf5
 * @see MutableNumberArrayOf5
 * @see MutableBigIntArrayOf5
 */
export type MutableNumericArrayOf5<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf6
 * @see MutableNumberArrayOf6
 * @see MutableBigIntArrayOf6
 */
export type MutableNumericArrayOf6<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf7
 * @see MutableNumberArrayOf7
 * @see MutableBigIntArrayOf7
 */
export type MutableNumericArrayOf7<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf8
 * @see MutableNumberArrayOf8
 * @see MutableBigIntArrayOf8
 */
export type MutableNumericArrayOf8<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf9
 * @see MutableNumberArrayOf9
 * @see MutableBigIntArrayOf9
 */
export type MutableNumericArrayOf9<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link Number} or {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumericArray
 * @see MutableArrayOf10
 * @see MutableNumberArrayOf10
 * @see MutableBigIntArrayOf10
 */
export type MutableNumericArrayOf10<T extends Numeric = Numeric, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link Array MutableArray} of 1 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf1
 * @see MutableNumberArrayOf1
 * @see MutableBigIntArrayOf1
 */
export type MutableNumberArrayOf1<T extends number = number, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf2
 * @see MutableNumberArrayOf2
 * @see MutableBigIntArrayOf3
 */
export type MutableNumberArrayOf2<T extends number = number, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf3
 * @see MutableNumberArrayOf3
 * @see MutableBigIntArrayOf3
 */
export type MutableNumberArrayOf3<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf4
 * @see MutableNumberArrayOf4
 * @see MutableBigIntArrayOf4
 */
export type MutableNumberArrayOf4<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf5
 * @see MutableNumberArrayOf5
 * @see MutableBigIntArrayOf5
 */
export type MutableNumberArrayOf5<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf6
 * @see MutableNumberArrayOf6
 * @see MutableBigIntArrayOf6
 */
export type MutableNumberArrayOf6<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf7
 * @see MutableNumberArrayOf7
 * @see MutableBigIntArrayOf7
 */
export type MutableNumberArrayOf7<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf8
 * @see MutableNumberArrayOf8
 * @see MutableBigIntArrayOf8
 */
export type MutableNumberArrayOf8<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf9
 * @see MutableNumberArrayOf9
 * @see MutableBigIntArrayOf9
 */
export type MutableNumberArrayOf9<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link Number}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableNumberArray
 * @see MutableArrayOf10
 * @see MutableNumberArrayOf10
 * @see MutableBigIntArrayOf10
 */
export type MutableNumberArrayOf10<T extends number = number, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link Array MutableArray} of 1 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf1
 * @see MutableBigIntArrayOf1
 * @see MutableBigIntArrayOf1
 */
export type MutableBigIntArrayOf1<T extends bigint = bigint, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf2
 * @see MutableBigIntArrayOf2
 * @see MutableBigIntArrayOf3
 */
export type MutableBigIntArrayOf2<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf3
 * @see MutableBigIntArrayOf3
 * @see MutableBigIntArrayOf3
 */
export type MutableBigIntArrayOf3<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf4
 * @see MutableBigIntArrayOf4
 * @see MutableBigIntArrayOf4
 */
export type MutableBigIntArrayOf4<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf5
 * @see MutableBigIntArrayOf5
 * @see MutableBigIntArrayOf5
 */
export type MutableBigIntArrayOf5<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf6
 * @see MutableBigIntArrayOf6
 * @see MutableBigIntArrayOf6
 */
export type MutableBigIntArrayOf6<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf7
 * @see MutableBigIntArrayOf7
 * @see MutableBigIntArrayOf7
 */
export type MutableBigIntArrayOf7<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf8
 * @see MutableBigIntArrayOf8
 * @see MutableBigIntArrayOf8
 */
export type MutableBigIntArrayOf8<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf9
 * @see MutableBigIntArrayOf9
 * @see MutableBigIntArrayOf9
 */
export type MutableBigIntArrayOf9<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link BigInt}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableBigIntArray
 * @see MutableArrayOf10
 * @see MutableBigIntArrayOf10
 * @see MutableBigIntArrayOf10
 */
export type MutableBigIntArrayOf10<T extends bigint = bigint, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]


/**
 * A type-alias for an {@link Array MutableArray} of 1 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf1
 * @see MutableJavascriptSymbolArrayOf1
 * @see MutableTypescriptSymbolArrayOf1
 */
export type MutableSymbolArrayOf1<T extends Symbol = Symbol, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf2
 * @see MutableJavascriptSymbolArrayOf2
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableSymbolArrayOf2<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf3
 * @see MutableJavascriptSymbolArrayOf3
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableSymbolArrayOf3<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf4
 * @see MutableJavascriptSymbolArrayOf4
 * @see MutableTypescriptSymbolArrayOf4
 */
export type MutableSymbolArrayOf4<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf5
 * @see MutableJavascriptSymbolArrayOf5
 * @see MutableTypescriptSymbolArrayOf5
 */
export type MutableSymbolArrayOf5<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf6
 * @see MutableJavascriptSymbolArrayOf6
 * @see MutableTypescriptSymbolArrayOf6
 */
export type MutableSymbolArrayOf6<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf7
 * @see MutableJavascriptSymbolArrayOf7
 * @see MutableTypescriptSymbolArrayOf7
 */
export type MutableSymbolArrayOf7<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf8
 * @see MutableJavascriptSymbolArrayOf8
 * @see MutableTypescriptSymbolArrayOf8
 */
export type MutableSymbolArrayOf8<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf9
 * @see MutableJavascriptSymbolArrayOf9
 * @see MutableTypescriptSymbolArrayOf9
 */
export type MutableSymbolArrayOf9<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableSymbolArray
 * @see MutableArrayOf10
 * @see MutableJavascriptSymbolArrayOf10
 * @see MutableTypescriptSymbolArrayOf10
 */
export type MutableSymbolArrayOf10<T extends Symbol = Symbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link Array MutableArray} of 1 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf1
 * @see MutableJavascriptSymbolArrayOf1
 * @see MutableTypescriptSymbolArrayOf1
 */
export type MutableJavascriptSymbolArrayOf1<T extends JavascriptSymbol = JavascriptSymbol, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf2
 * @see MutableJavascriptSymbolArrayOf2
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableJavascriptSymbolArrayOf2<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf3
 * @see MutableJavascriptSymbolArrayOf3
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableJavascriptSymbolArrayOf3<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf4
 * @see MutableJavascriptSymbolArrayOf4
 * @see MutableTypescriptSymbolArrayOf4
 */
export type MutableJavascriptSymbolArrayOf4<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf5
 * @see MutableJavascriptSymbolArrayOf5
 * @see MutableTypescriptSymbolArrayOf5
 */
export type MutableJavascriptSymbolArrayOf5<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf6
 * @see MutableJavascriptSymbolArrayOf6
 * @see MutableTypescriptSymbolArrayOf6
 */
export type MutableJavascriptSymbolArrayOf6<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf7
 * @see MutableJavascriptSymbolArrayOf7
 * @see MutableTypescriptSymbolArrayOf7
 */
export type MutableJavascriptSymbolArrayOf7<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf8
 * @see MutableJavascriptSymbolArrayOf8
 * @see MutableTypescriptSymbolArrayOf8
 */
export type MutableJavascriptSymbolArrayOf8<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf9
 * @see MutableJavascriptSymbolArrayOf9
 * @see MutableTypescriptSymbolArrayOf9
 */
export type MutableJavascriptSymbolArrayOf9<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 official Javascript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableJavascriptSymbolArray
 * @see MutableArrayOf10
 * @see MutableJavascriptSymbolArrayOf10
 * @see MutableTypescriptSymbolArrayOf10
 */
export type MutableJavascriptSymbolArrayOf10<T extends JavascriptSymbol = JavascriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]

/**
 * A type-alias for an {@link Array MutableArray} of 1 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf1
 * @see MutableTypescriptSymbolArrayOf1
 * @see MutableTypescriptSymbolArrayOf1
 */
export type MutableTypescriptSymbolArrayOf1<T extends TypescriptSymbol = TypescriptSymbol, > = [T,]
/**
 * A type-alias for an {@link Array MutableArray} of 2 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf2
 * @see MutableTypescriptSymbolArrayOf2
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableTypescriptSymbolArrayOf2<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, > = [T1, T2,]
/**
 * A type-alias for an {@link Array MutableArray} of 3 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf3
 * @see MutableTypescriptSymbolArrayOf3
 * @see MutableTypescriptSymbolArrayOf3
 */
export type MutableTypescriptSymbolArrayOf3<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, > = [T1, T2, T3,]
/**
 * A type-alias for an {@link Array MutableArray} of 4 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf4
 * @see MutableTypescriptSymbolArrayOf4
 * @see MutableTypescriptSymbolArrayOf4
 */
export type MutableTypescriptSymbolArrayOf4<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, > = [T1, T2, T3, T4,]
/**
 * A type-alias for an {@link Array MutableArray} of 5 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf5
 * @see MutableTypescriptSymbolArrayOf5
 * @see MutableTypescriptSymbolArrayOf5
 */
export type MutableTypescriptSymbolArrayOf5<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, > = [T1, T2, T3, T4, T5,]
/**
 * A type-alias for an {@link Array MutableArray} of 6 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf6
 * @see MutableTypescriptSymbolArrayOf6
 * @see MutableTypescriptSymbolArrayOf6
 */
export type MutableTypescriptSymbolArrayOf6<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, > = [T1, T2, T3, T4, T5, T6,]
/**
 * A type-alias for an {@link Array MutableArray} of 7 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf7
 * @see MutableTypescriptSymbolArrayOf7
 * @see MutableTypescriptSymbolArrayOf7
 */
export type MutableTypescriptSymbolArrayOf7<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7,]
/**
 * A type-alias for an {@link Array MutableArray} of 8 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf8
 * @see MutableTypescriptSymbolArrayOf8
 * @see MutableTypescriptSymbolArrayOf8
 */
export type MutableTypescriptSymbolArrayOf8<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8,]
/**
 * A type-alias for an {@link Array MutableArray} of 9 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf9
 * @see MutableTypescriptSymbolArrayOf9
 * @see MutableTypescriptSymbolArrayOf9
 */
export type MutableTypescriptSymbolArrayOf9<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9,]
/**
 * A type-alias for an {@link Array MutableArray} of 10 official Typescript {@link Symbol}
 *
 * @see import('collection').MutableArray
 * @see import('collection (mutable array)').MutableTypescriptSymbolArray
 * @see MutableArrayOf10
 * @see MutableTypescriptSymbolArrayOf10
 * @see MutableTypescriptSymbolArrayOf10
 */
export type MutableTypescriptSymbolArrayOf10<T extends TypescriptSymbol = TypescriptSymbol, T1 extends T = T, T2 extends T = T, T3 extends T = T, T4 extends T = T, T5 extends T = T, T6 extends T = T, T7 extends T = T, T8 extends T = T, T9 extends T = T, T10 extends T = T, > = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10,]
