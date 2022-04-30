// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(inputInt){
    return fare => fare * inputInt
}

const fareDoubler = fare => fare * 2 

const fareTripler = fare => fare * 3

const selectDifferentDrivers = function (driversArray, fun){
    
    return fun(driversArray)
}