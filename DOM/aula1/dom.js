//  ==== EXAMINE THE DOCUMENT OBJECT =======
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);

//console.log(document.title); // get information about title
//document.title = 123;       // changing information

//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all); // it should return an HTML COLLECTION. But is returning undefined

// IF YOU ADD SOMETHING THE 9 INDEX ELEMENT WILL NOT BE THE SAME
//console.log(document.all[9]);
//console.log(document.all[9].textContent);
//document.all[9].textContent = 'REMOVE ITEMS IF YOU WANT';

//console.log(document.forms); // RETURN AN HTMLcollection
//console.log(document.links); // RETURN AN HTMLcollection
//console.log(document.images); // RETURN AN HTMLcollection

// =============== SELECTORS ============================== 
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
//console.log(headerTitle.innerText);   // OBEY CSS STYLE RULES --------> Item Lister
//console.log(headerTitle.textContent); // DON'T OBEY CSS STYLE RULES  --> Item Lister 123
//console.log(headerTitle.innerHTML);   // ---> Item Lister <span style="display:none;">123</span>

//headerTitle.innerText   = 'goodBy'; 
//headerTitle.textContent = 'Hello'; 
//headerTitle.innerHTML   = '<h3>Hello</h3>'; 
/*
	<h1 id="header-title">
		<h3>Hello</h3>
	</h1>
	to change h1 to h3 you have to use some other methods to access the perent element...
*/

// ================ STYLE CHANGES ==========================
//var header = document.getElementById('main-header');
//console.log(header.style);
//header.style.borderBottom = 'solid 3px #F00';


// ============== GET ELEMENT BY CLASS NAME ================
var items = document.getElementsByClassName('list-group-item'); // HTMLcollection
console.log(items);



// HTML COLLECTION 

function sayHi() {
	document.title = 'Mouse Clicked';
	window.alert('Hi Body');
}

