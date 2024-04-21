export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    return this._size;
  }

  // Override toString() for string context
  toString() {
    return this._location;
  }
}
