class Cars {
    constructor(carReg, arrival){
        this._hourlyCost = 1.5;
        this._reg = carReg;
        this._arrival = arrival;
    }
    leavingCarPark(departure) {
        if( typeof departure == 'number' ) {
            let timeParked = departure - this._arrival;
            let parkingFee = timeParked * this._hourlyCost;
            console.log(`Thank you. You've been parked for ${timeParked} hours. You need to pay £${parkingFee}`);
            this._parkingFee = parkingFee;
            return parkingFee;
        } else 
            console.log('leavingCarPark.err: provide departure (number) as a param');
            return 0;
    }
    creditCustomer(){
        console.log(`Customer has been  credited with £${this._parkingFee}`);
    }
}


