"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 5º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
 */
// 5.1 Rest
var arr = [1, 2, 3, 4, 5, 6]; // RESTO DO ARRAY ARMAZENADO NA VARIAVEL Y

var x = arr[0],
    y = arr.slice(1);

function somaGeral() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (a, b) {
    return a + b;
  });
}

console.log(somaGeral(1, 2, 3, 4, 5, 6)); // 21

console.log(somaGeral(1, 2)); // 3
// 5.2 Spread

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
}; // TROCAR VALOR DA PROPRIEDADE DO OBJETO UTILZIZANDO O SPREAD

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: 'Gabriel',
  idade: 22
});

console.log(usuario2); // TROCAR VALOR DA PROPRIEDADE DO OBJETO ANINHADO UTILZIZANDO O SPREAD

var usuario3 = _objectSpread(_objectSpread({}, usuario), {}, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuario3);
