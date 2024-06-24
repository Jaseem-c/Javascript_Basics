// 1 ) Car Booking Data
// [id , brand , model , type , pricePerDay, available]
let carBooking = [
    [1, 'Toyota', 'Corolla', 'Sedan', 50, 10],
    [2, 'Honda', 'Civic', 'Sedan', 55, 8],
    [3, 'Ford', 'Mustang', 'Sports Car', 80, 5],
    [4, 'Jeep', 'Wrangler', 'SUV', 70, 7],
    [5, 'Nissan', 'Altima', 'Sedan', 45, 12]
];
// 1)	Print all car brand
carBooking.forEach(element => {
    console.log(element[1]);
});
console.log('......................');
// 2)	Print total number of cars available
console.log(carBooking.length);
console.log('......................');
// 3)	Print sedan car details
carBooking.filter(item => item[3] == 'Sedan').forEach(element => { console.log(element); }
)
console.log('......................');
// 4)	Print car with price per day greater than 60
carBooking.filter(item => item[4] > 60).forEach(element => { console.log(element[2]); }
)
console.log('......................');
// 5)	Print details of jeep wrangler
carBooking.filter(item => item[2] == 'Wrangler').forEach(element => { console.log(element); }
)
console.log('......................');
// 6)	Arrange cars based on the descending order of price per day
a = carBooking.sort((n1, n2) => n2[4] - n1[4])
console.log(a);
console.log('......................');
// 7)	Sort car based on ascending order of available cars.
a = carBooking.sort((n1, n2) => n1[5] - n2[5])
console.log(a);
console.log('......................');
// 8)	Find the car with highest availability
highest = carBooking.reduce((n1, n2) => n1[5] > n2[5] ? n1 : n2)
console.log(highest);
console.log('......................');
// 9)	Find the revenue if all the cars are rented for a day
rent = carBooking.map(item => item[4]).reduce((n1, n2) => n1 + n2)
console.log(rent);

console.log('......................');
// 10)	Count the number of sedan car available
t = carBooking.filter(item => item[3] == 'Sedan').map(item => item[5]).reduce((n1, n2) => n1 + n2)
console.log(t);
console.log('......................');
// 11)	 Find the car with lowest availability
highest = carBooking.reduce((n1, n2) => n1[5] < n2[5] ? n1 : n2)
console.log(highest);
console.log('......................');
// 12)	Print all car models
carBooking.forEach(item => console.log(item[2]))
console.log('......................');
// 13)	Print total type of cars available
k = carBooking.map(item => item[5]).reduce((n1, n2) => n1 + n2)
console.log(k);
console.log('......................');
// 14)	Find the details of the car with type – mustang
carBooking.filter(item => item[2] == 'Mustang').forEach(element => console.log(element))
console.log('......................');
// 15)	Check if there is any car with price per day exactly 55
x = carBooking.some(item => item[4] == 55)
console.log(x);

