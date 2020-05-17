var tyulei = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (typeof val == 'object') {
      return val.toString() == 'NaN'
    }
    return val !== val
  },
  /**
     * 将一个数组划分为指定长度的多个数组
     * @param {array} 输入的数组
     * @param {size} 要切分的数组长度
     * @returns {arrays} 返回切分后的数组，如果不能均匀切分，则多余的放到最后一项
    */
  chunk: function (ary, size = 1) {
    var aryNew = []
    var num = 0
    var flog = 0
    aryNew[0] = []
    aryNew[0][0] = ary[0]
    for (let i = 1; i < ary.length; i++) {
      if (i % size == 0) {
        flog++
        aryNew[flog] = []
      }
      aryNew[flog][i % size] = ary[i]
    }
    return aryNew
  },
  /**
   * 过滤数组中的false, null, 0, "", undefined, and NaN
   * @param {Array} ary
   * @returns {Array}
   */
  compact: function (ary) {
    var aryNew = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] == ary[i] && ary[i] !== 0 && ary[i] !== false && ary[i] !== '' && ary[i] !== undefined && ary[i] !== null) {
        aryNew.push(ary[i])
      }
    }
    return aryNew
  },
  /**
   * 创建一个新数组，将array与任何数组 或 值连接在一起
   * @param {Array} ary
   * @returns {Array}
   */
  concat: function (...arys) {
    var aryNew = []
    for (var i = 0; i < arys.length; i++) {
      if (Array.isArray(arys[i])) {
        for (var j = 0; j < arys[i].length; j++) {
          aryNew.push(arys[i][j])
        }
      } else {
        aryNew.push(arys[i])
      }
    }
    return aryNew
  },
  /**
   * 筛选出数组里不需要的数，返回一个新的数组
   * @param {Array} ary1 传入的数组
   * @param {Arrays} ary2 需要筛选掉的数值
   */
  difference: function (ary1, ary2) {
    let obj = {}
    let aryNew = []
    for (let i = 1; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        obj[arguments[i][j]] = i
      }
    }
    for (let i = 0; i < ary1.length; i++) {
      if (obj[ary1[i]] == undefined) {
        aryNew.push(ary1[i])
      }
    }
    return aryNew
  },
  /**
   * 创建一个切片数组，返回去除array前面n个的数组
   * @param {Array} ary
   * @param {Number} n
   * @return {Array}
   */
  drop: function (ary, n = 1) {
    let aryNew = []
    for (let i = n; i < ary.length; i++) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  fill: function (ary, value, start = 0, end = ary.length) {
    let aryNew = []
    for (let i = 0; i < ary.length; i++) {
      if (i >= start && i < end) {
        aryNew.push(value)
      } else {
        aryNew.push(ary[i])
      }
    }
    return aryNew
  },
  head: function (ary) {
    return ary[0]
  },
  indexOf: function (ary, value, fromindex = 0) {
    if (fromindex < 0) {
      fromindex = ary.length + fromindex
    }

    for (let i = fromindex; i < ary.length; i++) {
      if (ary[i] == value || ary[i] !== ary[i]) {
        return i
      }
    }
    return -1
  },
  join: function (ary, separator) {
    let str = ''
    for (let i = 0; i < ary.length - 1; i++) {
      str += ary[i] + separator.toString()
    }
    return str + ary[ary.length - 1]
  },
  last: function (ary) {
    return ary[ary.length - 1]
  },
  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
        return i
      } else if (ary[i] !== ary[i] && value !== value) {
        return i
      }
    }
    return -1
  },
  nth: function (ary, number) {
    if (number < 0) {
      number = ary.length + number
    }
    return ary[number]
  },
  /**
   * 传入一个数组，删除数组中的给定值
   * @param {Array} ary
   * @param {value} 给出需要删除的值
   * return {Array} 返回一个数组
   */
  pull: function (ary) {
    let obj = {}
    let aryNew = []

    for (let i = 1; i < arguments.length - 1; i++) {
      obj[ary[i]] = i
    }
    for (let i = 0; i < ary.length - 1; i++) {
      let flog = true
      if (ary[i] in obj) {
        flog = false
      }
      if (flog) {
        aryNew.push(ary[i])
      }
    }
    return aryNew
  },
  pullAll: function (ary1, ary2) {
    return ary1 = ary1.filter(x => !ary2.includes(x))
  },
  /**
   * 返回删除的数组，修改原数组
   * @param {*} ary1 输入的数组
   * @param {*} ary2 要删除的数值
   */
  pullAt: function (ary1, ary2) {
    let aryNew = []
    let aryRe = []
    for (let i = 0; i < ary1.length; i++) {
      if (ary2.includes(i)) {
        aryNew.push(ary[i])
      } else {
        aryRe.push(ary[i])
      }
    }
    for (let i = 0; i < aryRe.length; i++) {
      ary1[i] = aryRe[i]
    }
    ary1.splice(ary1.length - ary2.length, ary2.length)
    return aryNew
  },
  reverse: function (ary) {
    let aryNew = []
    for (let i = ary.length - 1; i >= 0; i--) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  slice: function (ary, start = 0, lastIndex = ary.length) {
    let aryNew = []
    for (let i = start; i < lastIndex; i++) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  sortIndex: function (ary, value) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i] > value) {
        return i
      }
    }
  },
  sortIndexOf: function (ary, value) {
    for (let i = 0; i < ary.length; i++) {
      if (ary[i] == value && ary[i + 1] !== value) {
        return i
      }
    }
    return -1
  },
  tail: function (ary) {
    let aryNew = []
    for (let i = 1; i < ary.length; i++) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  /**
   *
   * @param {*} ary
   * @param {*} number
   */
  take: function (ary, number = 1) {
    if (number >= ary.length) {
      return ary
    }
    let aryNew = []
    for (let i = 0; i < number; i++) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  takeRight: function (ary, number = 1) {
    if (number >= ary, length) {
      return ary
    }
    let number = ary.length - number
    let aryNew = []
    for (let i = number; i < ary.length; i++) {
      aryNew.push(ary[i])
    }
    return aryNew
  },
  nuiq: function (ary) {
    let obj = {}
    let aryNew = []
    for (let i = 0; i < ary.length; i++) {
      if (obj[ary[i]] == undefined) {
        aryNew.push(ary[i])
        obj[ary[i]] = i
      }
    }
    return aryNew
  },
  /**
   * 将二维数组按新的方式分配，将二维数组里，所有的第一项分为一类，所有的第二项分为一类
   * @param {Array} ary 输入一个二维数组
   * @returns {Array}  返回一个重新分配过的二维数组
   */
  unzip: function (ary) {
    let aryNew = []
    let length = []
    //找出输入二维数组中的最长数组
    for (let i = 0; i < ary.length; i++) {
      length.push(ary[i].length)
    }
    //创建一个新的空的二维数组
    for (let i = 0; i < Math.max(...length); i++) {
      aryNew.push([])
    }
    //把原来的二维数组里的值按顺序装到新的数组
    for (let i = 0; i < aryNew.length; i++) {
      for (let j = 0; j < ary.length; j++) {
        aryNew[i].push(ary[j][i])
      }
    }
    return aryNew
  },
  without: function (ary, ...values) {
    let aryNew = []
    values = [].concat(...values)
    for (let i = 0; i < ary.length; i++) {
      if (values.indexOf(ary[i]) == -1) {
        aryNew.push(ary[i])
      }
    }
    return aryNew
  },
  /**
   * 传入多个数组，去除里面重复的元素，返回一个去重且除去了重复元素的数组
   * @param {arrays} 传入多个数组
   * @return {array}  返回一个去重后的数组
   */
  xor: function (...values) {
    let ary = []
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
        if (ary.includes(values[i][j]) == -1) {
          ary.push(values[i][j])
        } else {
          ary.splice(ary.indexOf(values[i][j]), 1)
          j--
        }
      }
    }
    return ary

  },
  /**
   * 输入两个数组，将他们转换成对象，第一数组里的值为属性，第二个数组里的为属性值
   * @param {arrays} 输入两个数组
   * @returns {object} 输出一个对象
   */
  zipObject: function (ary1, ary2) {
    let obj = {}
    let len = Math.max(ary1.length, ary2.length)
    for (let i = 0; i < len; i++) {
      obj[ary1[i]] = ary2[i]
    }
    return obj
  },
  /**
   * 从集合中获取一个随机元素
   */
  smaple: function (collection) {

  },
  eq: function (value1, value2) {
    if (value1 !== value1 && value2 !== value2) {
      return true
    }
    if (value1 === value2) {
      return true
    }
    return false
  },
  gt: function (value, other) {
    if (value > other) {
      return true
    }
    return false
  },
  gte: function (value, other) {
    if (value >= other) {
      return true
    }
    return false
  },
  lt: function (value, other) {
    if (value < other) {
      return true
    }
    return false
  },
  lte: function (value, other) {
    if (value <= other) {
      return true
    }
    return false
  },
  add: function (number1, number2) {
    return number1 + number2
  },
  ceil: function (number, precision) {

  },
  dividend: function (number1, number2) {
    return number1 / number2
  },
  max: function (ary) {
    if (ary.length = 0) {
      return []
    }
    let max = -Infinity
    for (let i = 0; i < ary.length; i++) {
      if (ary[i] > max) {
        max = ary[i]
      }
    }
    return max
  },
  mean: function (ary) {
    if (ary.length = []) {
      return []
    }
    let sum = 0
    for (let i = 0; i < ary.length; i++) {
      sum = + ary[i]
    }
    return sum / ary.length
  },
  min: function (ary) {
    if (ary.length = 0) {
      return []
    }
    let min = Infinity
    for (let i = 0; i < ary.length; i++) {
      if (ary[i] < min) {
        min = ary[i]
      }
    }
    return min
  },
  multiply: function (number1, number2) {
    return number1 * number2
  },
  subtract: function (number1, number2) {
    return number1 - number2
  },
  sum: function (ary) {
    let sum = 0
    for (let i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  },
  defaults: function (obj) {
    let objNew = {}
    for (let i = 0; i < arguments.length; i++) {
      for (var prop in arguments[i]) {
        if (objNew[prop] == undefined) {
          objNew[prop] = arguments[i][prop]
        }
      }
    }
    return objNew
  },
  hasIn: function (obj, path) {
    if (obj[path] == undefined) {
      return false
    }
    return true
  },
  invert: function (obj) {
    let objNew = {}
    for (var prop in obj) {
      objNew[obj[prop]] = prop
    }
    return objNew
  },
  omit: function (obj, props) {
    let objNew = {}
    for (let i = 0; i < props.length; i++) {
      for (let prop in obj) {
        if (prop !== props[i]) {
          objNew[prop] = obj[prop]
        }
      }
    }
    return objNew
  },









}