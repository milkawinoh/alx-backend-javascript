/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-underscore-dangle
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}
