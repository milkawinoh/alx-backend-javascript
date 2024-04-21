export default class Currency{
  constructor(code, name){
    this._code = code;
    this._name = name;
  }
  get code(){
    return this._code;
  }
  set code(value){
    if(typeof code == 'string'){
      this._code = value
    }
    throw new TypeError("code must be a string")
  }
  get name(){
    return this._name;
  }
  set name(value){
    if(typeof name == 'string'){
      this._name = value
    }
    throw new TypeError("name must be a string")
  }
  displayFullCurrency(){
    const fullcurrency = `${this.name} (${this.code})`;
    return fullcurrency;
  }

}