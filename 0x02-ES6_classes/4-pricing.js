import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this.currency = currency; // Call setter for currency to perform type checking
    }

    // Getter and Setter for 'amount'
    get amount() {
        return this._amount;
    }
    set amount(value) {
        if (typeof value === 'number') {
            this._amount = value;
        } else {
            throw new TypeError("Amount must be a number");
        }
    }

    // Getter and Setter for 'currency'
    get currency() {
        return this._currency;
    }
    set currency(value) {
        if (value instanceof Currency) {
            this._currency = value;
        } else {
            throw new TypeError("Currency must be a Currency instance");
        }
    }

    // Method to display full price
    displayFullPrice() {
        if (this._currency instanceof Currency) {
            return `${this._amount} ${this._currency.code}`;
        } else {
            throw new Error("Currency is not set correctly");
        }
    }

    // Static method to convert price based on conversion rate
    static convertPrice(amount, conversionRate) {
        if (typeof conversionRate === "number") {
            return amount * conversionRate;
        } else {
            throw new TypeError("Conversion rate must be a number");
        }
    }
}
