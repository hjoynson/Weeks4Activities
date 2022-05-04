class Cars {
    constructor(reg, arrival) {
        this._reg = reg; //Dynamic variable
        this._arrival = arrival;
        this._departure;
        this._totalCost;
        this._amtPaid = 0;
        this._costPerHour = 1.5;
        this._hasPaid = false;
    }
    departure(time) { //Calculates time spent in parking
        this._departure = time;
        this._totalCost = (this._departure - this._arrival) * this._costPerHour;
    }
    payParking(payment) { //Total cost of parking
        if (this._amtPaid < this._totalCost) {
            this._amtPaid += payment;
            if (this._amtPaid >= this._totalCost) {
                this._hasPaid = true; // Check that customer has paid in full
            }
        }
    }
    exit() {
        if (this._hasPaid) {
            console.log("Thanks for visiting");
        }
    }
}

class staff extends Cars {
    constructor(reg, arrival, isSTaff) {
        super(reg, arrival, isSTaff);

        this._isStaff = false;
        this._credits = 5;

        if (this._isStaff = true && this._credits > 0) {
            this._hasPaid = true;
            this._totalCost /= 2;
            this._credits --;
        } else { 
            this._hasPaid = false;
        }
        console.log(this._credits)
    }
}

const staffCar = new staff ("staffCar", 10, true)
staffCar.departure(13);
staffCar.payParking(10);
console.log(staffCar);
 

