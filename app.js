/**
 * Created by Aditya on 13-Jul-17.
 */
(function(){var app=angular.module("MobileStore",[]);
var iphone={
    name:"iphone 7 plus",
    color:"Apple Red",
    memory:"3GB RAM 128GB Internal memory",
    price:70000,
    image:"iphone7plus.png",
    isSoldOut:false
};

/*app.controller("StoreController",function () {
    this.mobile=iphone;
})*/

var iphone2={
    name:"iphone 7 plus",
    color:"Silver",
    memory:"3GB RAM 128GB Internal memory",
    price:75000,
    image:"iphone3.png",
    isSoldOut:false
};

    /*var iphone3={
        name:"iphone 7 plus",
        color:"Apple Red",
        memory:"3GB RAM 128GB Internal memory",
        price:70000,
        image:"iphone7plus.png",
        isSoldOut:false
    };

    var iphone4={
        name:"iphone 7 plus",
        color:"Silver",
        memory:"3GB RAM 128GB Internal memory",
        price:75000,
        image:"iphone3.png",
        isSoldOut:false
    };*/

app.controller("StoreController",function () {
    this.mobiles=[iphone,iphone2,iphone,iphone2];

    this.setActiveTab=function(mobile,tab)
    {
        mobile.activeTab=tab;
    }
});})
();

/*function myFunc1() {
    document.getElementById("demo").innerHTML("This is the description");

}
function myFunc2() {
    document.getElementById("demo").innerHTML("This is the Specification");

}

function myFunc3() {
    document.getElementById("demo").innerHTML("This is the review");

}*/