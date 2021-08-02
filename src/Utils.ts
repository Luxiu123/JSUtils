/**
 * 生成从minNum到maxNum的随机数
 * @param {number} minNum
 * @param {number} maxNum
 * @returns {number}
 */
function randomNum(minNum: number, maxNum: number): number {
  switch (arguments.length) {
    case 1:
      return parseInt(String(Math.random() * minNum + 1), 10);
    case 2:
      return parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10);
    default:
      return 0;
  }
}

/**
 * 拷贝对象
 * @param {any} obj
 * @returns {any}
 */
function copyObject(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 求数组最大值
 * @param {number[]} array
 * @returns {number}
 */
function max(array: number[]): number {
  if (array.length < 1) {
    throw new Error("Array is empty");
  }
  let maxVal = array[0];
  for (const val of array) {
    if (maxVal < val) {
      maxVal = val;
    }
  }
  return maxVal;
}

/**
 * 求数组最小值
 * @param {number[]} array
 * @returns {number}
 */
function min(array: number[]): number {
  if (array.length < 1) {
    throw new Error("Array is empty");
  }
  let minVal = array[0];
  for (const val of array) {
    if (minVal < val) {
      minVal = val;
    }
  }
  return minVal;
}

/**
 * 求数组总和
 * @param {number[]} array
 * @returns {number}
 */
function sum(array: number[]): number {
  let count = 0;
  for (const val of array) {
    count += val;
  }
  return count;
}

/**
 * 求数组平均值
 * @param {number[]} array
 * @returns {number}
 */
function avg(array: number[]): number {
  if (array.length < 1) {
    throw new Error("Array is empty");
  }
  return sum(array) / array.length;
}

/**
 * 求数组各元素所占比例
 * @param {number[]} array
 * @returns {number[]}
 */
function calculateItemWeight(array: number[]): number[] {
  if (array.length < 1) {
    return [];
  }
  let count = sum(array);
  let weightArray = [];
  for (const val of array) {
    weightArray.push(val / count);
  }
  return weightArray;
}

/**
 * 生成长度为length随机字符串
 * @param {number} length
 * @returns {string}
 */
function randomString(length: number): string {
  let randomSource = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return randomStringGenerator(randomSource, length);
}

/**
 * 生成长度为length随机数字字符串
 * @param {number} length
 * @returns {string}
 */
function randomStringNumber(length: number): string {
  let randomSource = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return randomStringGenerator(randomSource, length);
}

/**
 * 随机字符串生成器
 * @param {Array<string>} randomSource
 * @param {number} length
 * @returns {string}
 */
function randomStringGenerator(randomSource: string[], length: number): string {
  let strArray = new Array<string>(),
    pos;
  for (let i = 0; i < length; i++) {
    pos = randomNum(0, randomSource.length - 1);
    strArray.push(randomSource[pos]);
  }
  return strArray.join("");
}

/**
 * 根据keys数组获取map对应的值
 * @param {Map<object, object>} map
 * @param {Array<object>} keys
 * @returns {Array<object>}
 */
function getMapValues<K, V>(map: Map<K, V>, keys: K[]): Array<V> {
  let array = new Array<V>();
  for (const key of keys) {
    array.push(map.get(key) as V);
  }
  return array;
}

/**
 * 设置map值
 * @param {Map<K, V>} map
 * @param {K} key
 * @param {V} value
 * @param {V} defaultValue
 */
function mapSet<K, V>(map: Map<K, V>, key: K, value: V, defaultValue: V): void {
  // 键不为空
  if (String(key) == "") {
    return;
  }
  if (map.has(key)) {
    map.set(key, value);
  } else {
    map.set(key, defaultValue);
  }
}

/**
 * 调整array长度，返回新数组
 * @param {Array<T>} array
 * @param {number} length 调整后数组长度
 * @param {T} fill 用于增补
 * @returns {T[]}
 */
function adjustArray<T>(array: Array<T>, length: number, fill: T): T[] {
  if (array.length > length) {
    return array.slice(0, length);
  }
  let newArray = array.slice(0);
  // 填补
  for (let i = 0; i < length - newArray.length; i++) {
    newArray.push(fill);
  }
  return newArray;
}

/**
 * 迭代器转数组
 * @param {IterableIterator} iter
 * @returns {Array<object>}
 */
function iteratorToArray<T>(iter: Iterable<T>): T[] {
  let array = new Array<T>();
  for (const val of iter) {
    array.push(val);
  }
  return array;
}

/**
 * 反转map
 * @param {Map<K, V>} map
 * @returns {Map<V, K[]>}
 */
function reverseMap<K, V>(map: Map<K, V>): Map<V, K[]> {
  let reversedMap = new Map<V, K[]>();
  for (const key of map.keys()) {
    let value = map.get(key) as V;
    if (reversedMap.has(value)) {
      (reversedMap.get(value) as K[]).push(key);
    } else {
      reversedMap.set(value, [key]);
    }
  }
  return reversedMap;
}

/**
 * 带权随机数
 * @param {Array<T>} dataArray
 * @param {number[]} weightArray
 * @returns {T}
 */
function weightRandom<T>(dataArray: Array<T>, weightArray: number[]): T {
  let random = randomNum(1, 100);
  // 小数权重
  let decimalWeight = calculateItemWeight(weightArray);
  let weightRangeData = [{ range: [0, 0], data: dataArray[0] }];
  for (const index in decimalWeight) {
    let leftValue = weightRangeData[index].range[1] + 1;
    let obj = {
      // 前一个
      range: [leftValue, leftValue + 100 * decimalWeight[index]],
      data: copyObject(dataArray[index]),
    };
    weightRangeData.push(obj);
  }
  // 删除首个元素
  weightRangeData.shift();
  for (const data of weightRangeData) {
    if (random <= data.range[1] && random >= data.range[0]) {
      return data.data;
    }
  }
  // 不匹配
  return dataArray[0];
}

/**
 * 检查字符串是否包含空字符
 * @param {string} text
 * @returns {boolean}
 */
function containsSpaces(text: string): boolean {
  let reg = /\s/;
  return reg.test(String(text));
}

class Validation {
  /**
   * 是否合法电话号码
   * @param {string} text text
   * @returns {boolean}
   */
  public static validPhoneNumber(text: string): boolean {
    return /^[1][3,5,6,7,8,9]\d{9}$/.test(text);
  }

  /**
   * 是否合法邮箱
   * @param {string} text
   * @returns {boolean}
   */
  public static validMailBox(text: string): boolean {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(text);
  }
}

/**
 * 转义普通字符串的正则特殊字符
 * @param {string} str
 * @returns {string}
 */
function escapeSpecial(str: string): string {
  var REG = /\\/g;
  if (REG.test(str)) {
    // 特殊的转义字符，单独处理，且必须在开头替换
    str = str.replace(REG, "\\\\");
  }
  var reg = [
    /\*/g,
    /\+/g,
    /\?/g,
    /\{/g,
    /\}/g,
    /\$/g,
    /\!/g,
    /\^/g,
    /\=/g,
    /\//g,
    /\|/g,
    /\./g,
    /\[/g,
    /\]/g,
    /\(/g,
    /\)/g,
  ];
  var rep = [
    "\\*",
    "\\+",
    "\\?",
    "\\{",
    "\\}",
    "\\$",
    "\\!",
    "\\^",
    "\\=",
    "\\/",
    "\\|",
    "\\.",
    "\\[",
    "\\]",
    "\\(",
    "\\)",
  ];
  for (let i = 0; i < reg.length; i++) {
    // 如果有特殊字符
    if (reg[i].test(str)) {
      str = str.replace(reg[i], rep[i]);
    }
  }
  return str;
}

export default {
  randomNum,
  copyObject,
  max,
  min,
  sum,
  avg,
  calculateItemWeight,
  randomString,
  randomStringNumber,
  getMapValues,
  mapSet,
  adjustArray,
  iteratorToArray,
  reverseMap,
  weightRandom,
  containsSpaces,
  Validation,
  escapeSpecial,
};
