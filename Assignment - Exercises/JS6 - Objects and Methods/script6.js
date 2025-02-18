// 1. Create a car object

const car = {
    make: "Hyundai",
    model: "Starex",
    year: 2005
};

function getDescription (car) {
    console.log(`This car is a ${car.year} ${car.make} ${car.model}.`);
}

getDescription(car);