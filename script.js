/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printingThroghMap);  
 
  function printingThroghMap(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroghForEach);  
 
  function printingThroghForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}


function addData() {
  //Write your code here
  let newObj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}
 
function removeAdmin() {
  //Write your code here
  let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.profession !== "admin") {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);
}
 
function concatenateArray() {
  //Write your code here
  let arr2 = [
    { id: 5, name: "Nitai", age: "37", profession: "Lead software developer" },
    { id: 6, name: "Gaur", age: "24", profession: "SDE 1" },
    { id: 7, name: "Advait", age: "51", profession: "Program Architect" },
  ];
 
  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
