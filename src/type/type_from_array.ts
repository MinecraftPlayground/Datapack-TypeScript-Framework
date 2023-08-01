/**
 * Provides a generator to generate a type from the keys of an array.
 * 
 * @type 
 */
export type TypeFromArray<ArrayType extends readonly unknown[]> = ArrayType[number];
