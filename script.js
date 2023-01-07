/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingThroghMap); // Each element is stored in "printingThroghMap" variable
 
  function printingThroghMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroghForEach); // Each element is stored in "printingThroghForEach" variable
 
  function printingThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function addData() {
  //Write your code here
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
}


