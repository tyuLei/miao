var tyulei = {
  isNull: function (val) {
    if (val === null) {
      return true
    } else {
      return false
    }
  },
  isNaN: function (val) {
    if (val !== val) {
      return true
    } else {
      return false
    }
  },
  /**
   * 把一个数组拆分成多个数组
   * @param ary {Array} 需要拆分的数组
   * @param size {Number}  拆分的大小
   * @returns {Array[][]}
   */
  chunk: function (ary, size = 1) {
    if (size <= 1) {
      return ary
    }
    var aryNew = []
    var count = 0
    var number = 0
    for (var j = 0; j < size; j++) {
      aryNew[j] = []
    }

    for (var i = 0; i < ary.length; i++) {

      aryNew[number].push(ary[i])
      count++
      if (count == Math.ceil(ary.length / size)) {
        number++
      }
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
  concat: function (ary) {
    var aryNew = []
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary)) {
        for (var j = 0; j < ary.length; j++) {
          aryNew.push(ary[j])
        }
      }
      aryNew.push(ary[i])
    }
    return aryNew
  },
  /**
   * 筛选出数组里不需要的数，返回一个新的数组
   * @param {Array} ary1 传入的数组
   * @param {Array} ary2 需要筛选掉的数值
   */
  difference: function (ary1, ary2) {
    for (let i = 0; i < ary1.length; i++) {
      for (let j = 0; j < ary2.length; j++) {
        if (ary1[i] == ary2[j]) {
          ary1.splice(i, 1)
        }
      }
    }
    return ary1
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
  fill: function (ary, string, start = 0, end = ary.length) {
    let aryNew = []
    for (let i = 0; i < ary.length; i++) {
      if (ary >= start && ary < end) {
        aryNew.push(string)
      }
      aryNew.push(ary[i])
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
      if (ary[i] == value) {
        return i
      }
    }
    return -1
  },
  join: function (ary, separator) {
    let str = ''
    for (let i = 0; i < ary.length; i++) {
      str += ary[i] + separator
    }
    return str
  },
  last: function (ary) {
    return ary[ary.length - 1]
  },
  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
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
        flog = flase
      }
      if (flog) {
        aryNew.push(ary[i])
      }
    }
    return aryNew
  },
  pullAll: function (ary1, ary2) {
    let obj = {}
    let aryNew = []

    for (let i = 1; i < ary2.length - 1; i++) {
      obj[ary1[i]] = i
    }
    for (let i = 0; i < ary1.length - 1; i++) {
      let flog = true
      if (ary1[i] in obj) {
        flog = false
      }
      if (flog) {
        aryNew.push(ary1[i])
      }
    }
    return aryNew
  },
  pullAt: function (ary) {
    let aryNew = []
    for (let i = 0; i < ary.length; i++) {
      for (let j = 1; j < arguments.length; j++) {
        if (i == arguments[j]) {
          aryNew.push(ary[i])
        }
      }
    }
    tyulei.pullAll(ary, aryNew)

    return aryNew
  },
  reverse: function (ary) {
    let aryNew = []
    for (let i = ary.length - 1; i >= 0; i--) {
      aryNew.push(ary[i])
    }
    return aryNew
  }
}