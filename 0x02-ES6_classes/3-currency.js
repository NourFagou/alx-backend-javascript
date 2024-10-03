/* eslint-disable no-underscore-dangle */
/*
 * Creates a new Currency class
 * @param: code (Stirng)
 * @param: name (String)
 * */
class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
