//--------values of Each Plane is append in HTML-------------
//--------This part is object----------------------
/*var hostingPlane = {
    plane1:{
        name : "Basic",
        monthly : "$3.99",
        diskSpace : "100GB",
        dataTransfer : "1000GB/Mon",
        sitePages : 10
    },
    plane2 : {
        name : "Professional",
        monthly : "$5.99",
        diskSpace : "500GB",
        dataTransfer : "500GB/Mon",
        sitePages : 50
    },
    plane3 : {
        name : "Ultimate",
        monthly : "$9.9",
        diskSpace : "1000GB",
        dataTransfer : "2000GB/Mon",
        sitePages : 500
    }
}

//-----------this part is logic implement in html-------------------
var olList = document.getElementById("main1");
for(var key in hostingPlane.plane1){
    var liList = document.createElement("li");
    // var firstChar = key.firstChar(0);
    // var upCaseFirstChar = firstChartoUpCase();
    var liText = document.createTextNode(key +" : "+hostingPlane.plane1[key]);
    liList.appendChild(liText);
    olList.appendChild(liList);
}
var olList = document.getElementById("main2");
for(var key in hostingPlane.plane2){
    var liList = document.createElement("li");
    var liListText = document.createTextNode(key +" : "+hostingPlane.plane2[key]);
    liList.appendChild(liListText);
    olList.appendChild(liList);
}

var olList = document.getElementById("main3");
for(let key in hostingPlane.plane3){
    var liList = document.createElement("li");
    var liListText = document.createTextNode(key+" : "+hostingPlane.plane3[key]);
    liList.appendChild(liListText);
    olList.appendChild(liList);
}

//---------------End---------------------------------*/







// var plane1,plane2,plane3;
// for(var key in hostingPlane){
//     if(key === "plane1"){
//         plane1 = key;
//     }
//     else if(key == "plane2"){
//         plane2 = key;
//     }
//     else{
//         plane3 = key;
//     }
// }






//Done how to append data of nested object. Work only one Object.
// var txt = "";
// var div  = document.getElementById("main");
// var infoTable = document.getElementById("main");
// console.log(infoTable)
// for(var key in hostingPlane.plane1){
//     if (key === "name" ){
//         var tableR = document.createElement("tr");
//         var tableth = document.createElement("th");
//         var tblRow = document.createTextNode(hostingPlane.plane1[key]);
//         tableth.appendChild(tblRow);
//         tableR.appendChild(tableth);
//         infoTable.appendChild(tableR);
//     }
//     else{
//         var tableR = document.createElement("tr");
//         var tblTd = document.createElement("td");
//         var tblTdText = document.createTextNode(hostingPlane.plane1[key]);
//         // console.log(tblTdText)
//         tblTd.appendChild(tblTdText);
//         tableR.appendChild(tblTd);
//         // console.log()
//         infoTable.appendChild(tableR);
//     }
// }

// var lilist = document.createElement("");
    // var nodetext = document.createTextNode(key.toUpperCase()+" : "+hostingPlane.plane1[key]);
    // lilist.appendChild(nodetext);
    // console.log(div.appendChild(lilist));
    // // txt =txt + hostingPlane[key]+" ";
// var p = document.createElement("p");
// var text = document.createTextNode("hello World");
// p.appendChild(text);
// document.getElementById("main").appendChild(text);


// var check =  hostingPlane.plane1;
// var table = document.createElement("table");
// var div = document.getElementById("body");
// table.setAttribute("id","table1")
// console.log(hostingPlane.plane1.name);
// for(var key in hostingPlane.plane1){

//     if(hostingPlane.plane1.name === "Basic"){
//         var thtag = document.createElement("p");
//         var thValue = document.createTextNode(key);
//         thtag.appendChild(thValue);
//         div.appendChild(thtag);
//     }
