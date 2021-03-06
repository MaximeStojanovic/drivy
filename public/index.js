

'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

function Price() {
    var time;
    var rentalDays;
    var pDate;
    var rDate;
    var carPriceDay;
    var distance;
    var nbKm;
    var carPriceKm;
    var rentalPrice;
    var sale = 0;
    var reduction;
    var com = 0;
    var deductible = 0;
    cars.forEach(function Get(element)
    {
        rentals.forEach(function Get2(element2)
        {
            if (element2.carId == element.id) {

                carPriceDay = element.pricePerDay;
                carPriceKm = element.pricePerKm;
                pDate = new Date(element2.pickupDate);
                rDate = new Date(element2.returnDate);
                rentalDays = ((rDate - pDate) / (24 * 60 * 60 * 1000));
                if (rentalDays > 10) {
                    sale = 0.5;
                }
                else if (rentalDays > 4) {
                    sale = 0.3;                
                }
                else if (rentalDays > 1) {
                    sale = 0.1;
                }
                nbKm = element2.distance;
                time = rentalDays * carPriceDay;
                distance = nbKm * carPriceKm;
                rentalPrice = (time + distance);
                reduction = rentalPrice * sale;
        
                if (element2.options.deductibleReduction == true)
                {
                    deductible = 4;
                }

                var rentalPrice2 = rentalPrice - reduction + deductible;
                element2.price = rentalPrice2;


                com = 0.3 * rentalPrice2 - deductible;
                element2.commission.insurance = 0.5 * com;
                element2.commission.assistance = 1;
                element2.commission.drivy = com - (element2.commission.insurance + element2.commission.assistance) + deductible;

                console.log(rentalPrice2);
                
            }
        }
        )
    }
    )
}
Price();
/*console.log(cars.id);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
Price();*/

