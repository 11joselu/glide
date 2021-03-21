/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
export function toInt (value) {
  return parseInt(value)
}

/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */
export function toFloat (value, fixed = 6) {
  return parseFloat(value.toFixed(fixed))
}

/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */
export function isString (value) {
  return typeof value === 'string'
}

/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 */
export function isObject (value) {
  return (value && typeof value === 'object' && !Array.isArray(value) && value !== null)
}

/**
 * Indicates whether the specified value is a number.
 *
 * @param  {*} value
 * @return {Boolean}
 */
export function isNumber (value) {
  return typeof value === 'number'
}

/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */
export function isFunc (value) {
  return typeof value === 'function'
}

/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */
export function isUndefined (value) {
  return typeof value === 'undefined'
}

/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */
export function isArray (value) {
  return value.constructor === Array
}
