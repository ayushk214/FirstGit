//EXAMINE THE DOCUMENT OBJECT//
// console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// //document.title=123;//
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.doctype);

// //SELECTORS//

// document.all[10].textContent="Hello";

//STYLING
// var headerTitle =document.getElementById('header-title');
// headerTitle.textContent="goodbye"
// headerTitle.style.borderBottom="solid 3px #000"

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[2].style.fontWeight="bold";

// console.log(items[2]);
// items[2].style.backgroundColor="green"

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight="bold";
// }
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[2].style.fontWeight="bold";

// console.log(li[2]);
// items[2].style.backgroundColor="green"//

// for(var i=0; i<li.length; i++){
//     li[i].style.fontWeight="bold";
// }

//li[1].style.backgroundColor="green"//

// //QUERYSELECTOR//
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// //adding value in the addItem box//
// var input=document.querySelector('input');
// input.value='Hello World'

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// //changing the colour of firstList Item//

// var firstItem=document.querySelector('.list-group-item');
// firstItem.style.color='red';

// //changing the color of the LastItem//

// var LastItem=document.querySelector('.list-group-item:last-child');
// LastItem.style.color="blue";

// //changing color of second Item//

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="green";

// //QUERYSELECTORALL//

// var titles=document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent='Hello'

// //background color changing of even/odd list//
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor="#f4f4f4";
// }

//  // Select the 3rd li element (index 2) within the #myList element///
//  const thirdListItem = document.querySelectorAll('li')[2];

//  // Hide the 3rd li element
// thirdListItem.style.display = 'none';

//PART-2

//TRAVERSING THE DOM//
var itemlist=document.querySelector('#items');

//createElement//

//create a div

var newDiv=document.createElement('div');

//add class//
newDiv.className='hello';

//add id//
newDiv.id='hello1';
//add attr
newDiv.setAttribute('title','hello div');

//create a text node//
var newDivText=document.createTextNode('hello world');

//Add text to div//
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv,h1);









