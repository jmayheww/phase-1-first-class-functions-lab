// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = () => drivers.slice(0, 2);
returnFirstTwoDrivers;

const returnLastTwoDrivers = () => drivers.slice(2, 4);
returnLastTwoDrivers;

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num1) {

     return function(num2) {
        return num1 * num2;
    };

};



const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


fareDoubler(2);
fareTripler(3);

function selectDifferentDrivers(drivers, arrayfn ) {

    return arrayfn(drivers);
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);















