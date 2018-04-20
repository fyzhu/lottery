/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//set-map
{
    var list = new Set();
    list.add(5);
    list.add(7);
    console.log('size', list.size);
}
{
    var arr = [1, 2, 3, 4, 5];
    var _list = new Set(arr);
    console.log(_list.size);
}
{
    var _list2 = new Set();
    _list2.add(1);
    _list2.add(2);
    _list2.add(1); //不会添加进去
    console.log(_list2);
    var _arr = [1, 2, 3, 1, 2];
    var list2 = new Set(_arr);
    console.log(list2);
    var arr2 = [1, 2, 3, 1, '2'];
    var list3 = new Set(arr2);
    console.log(list3);
}
{
    var _arr2 = ['add', 'delete', 'clear', 'has'];
    var _list3 = new Set(_arr2);
    console.log(_list3.has('add'));
    console.log('delete', _list3.delete('add'), _list3);
    _list3.clear();
    console.log(_list3);
}
{
    var _arr3 = ['add', 'delete', 'clear', 'has'];
    var _list4 = new Set(_arr3);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            console.log('key', key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            console.log('value', value);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _list4[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _value = _step3.value;

            console.log('value', _value);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = _list4.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _step4$value = _slicedToArray(_step4.value, 2),
                _key = _step4$value[0],
                _value2 = _step4$value[1];

            console.log('key-value', _key, _value2);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    _list4.forEach(function (item) {
        console.log(item);
    });
}
{
    //WeakSet 1元素只能是对象，2弱引用，地址引用，
    var weakList = new WeakSet();
    var arg = {};
    weakList.add(arg);
    console.log(weakList);
}
//map
{
    //map的key可以是任何类型
    var map = new Map();
    var _arr4 = ['123'];
    map.set(_arr4, 456);
    console.log(map, map.get(_arr4));
}
{
    var _map = new Map([['a', 123], ['b', 456]]);
    console.log(_map);
    console.log(_map.size);
    console.log('delete', _map.delete('a'), _map);
    console.log('clear', _map.clear(), _map);
}
{
    //WeakMap的key必须是对象
    var weakmap = new WeakMap();
    var o = {};
    weakmap.set(o, 123);
    console.log(weakmap.get(o));
}

//map array 横向对比，增删改查

{
    var _map2 = new Map();
    var array = [];
    //增
    _map2.set('t', 1);
    array.push({ t: 1 });
    console.log('增', _map2, array);
    //查
    var map_exist = _map2.has('t');
    var array_exist = array.find(function (item) {
        return item.t;
    });
    console.log('查', map_exist, array_exist);
}
{
    var _map3 = new Map();
    var _array = [];
    //增
    _map3.set('t', 1);
    _array.push({ t: 1 });
    //改
    _map3.set('t', 2);
    _array.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.info('改', _map3, _array);
}
{
    var _map4 = new Map();
    var _array2 = [];
    //增
    _map4.set('t', 1);
    _array2.push({ t: 1 });
    //删除
    _map4.delete('t');
    var index = _array2.findIndex(function (item) {
        return item.t;
    });
    _array2.splice(index, 1);
    console.log('删', _map4, _array2);
}
//set 和 array 对比
{
    var set = new Set();
    var _arr5 = [];
    var item1 = { t: 1
        //增
    };set.add(item1);
    _arr5.push({ t: 1 });
    console.log('增', set, _arr5);

    //查
    var set_exist = set.has(item1);
    var arr_exist = _arr5.find(function (item) {
        return item.t;
    });
    console.log('查', set_exist, arr_exist);
}
{
    var _set = new Set();
    var _arr6 = [];
    var _item = { t: 1
        //增
    };_set.add(_item);
    _arr6.push({ t: 1 });
    // console.log(set, arr);
    //改
    _set.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    _arr6.forEach(function (item) {
        return item.t ? item.t = 2 : '';
    });
    console.log('改', _set, _arr6);
}
{
    var _set2 = new Set();
    var _arr7 = [];
    var _item2 = { t: 1
        //增
    };_set2.add(_item2);
    _arr7.push({ t: 1 });
    //删
    _set2.forEach(function (item) {
        return item.t ? _set2.delete(item) : '';
    });
    var _index = _arr7.findIndex(function (item) {
        return item.t;
    });
    _arr7.splice(_index, 1);
    console.log('删', _set2, _arr7);
}
// map,set,object对比
{
    var obj = {};
    //增
    obj['t'] = 1;
    console.log(obj);
    //查
    console.log('t' in obj, Reflect.has(obj, 't'));
    //改
    obj['t'] = 2;
    console.log(obj);
    //删
    delete obj['t'];
    console.log(obj);
}

/***/ })
/******/ ]);