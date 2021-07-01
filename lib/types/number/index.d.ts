/**
 * 数字千分位处理
 * @param {String | Number} num 数字
 * @return {String} 格式的字符串,如'1,234,567.45'
 *
 * 另外：代码量最少的一种方法；需考虑兼容性
 * toLocaleString 方法（代码量最少的一种方法）
 * var num = 3600; num.toLocaleString()
 */
export declare function toThousands(num: number): string;
/**
 * 数字格式化，不进行四舍五入,默认保留2位小数点
 * @param {String | Number} num 数字
 * @param {String | Number} len 保留几位小数; 默认保留两位
 * @return {String} 格式的字符串,如 "20210.01"
 * var num = 20210.010009; formatNum(num)
 */
export declare function formatNum(num: number | string, len?: number): string;
