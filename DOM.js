//EXAMINE THE DOCUMENT OBJECT//
console.dir(document);
console.log(document.domain);
console.log(document.title);
//document.title=123;
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.doctype);

//SELECTORS

document.all[10].textContent="Hello";

//STYLING
var headerTitle =document.getElementById('header-title');
headerTitle.textContent="goodbye"
headerTitle.style.borderBottom="solid 3px #000"

var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.fontWeight="bold";

console.log(items[2]);
items[2].style.backgroundColor="green"

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight="bold";
}



