// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; 
// Знайти максимальне значення масиву.

// let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
// let max = Math.max(...arr);

// console.log(max);


// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”].
//  Створити новий масив де будуть тільки Стрінгові значення.

// let arr =  ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
// let strArr = [];

// for (let i = 0; i < arr.length; i++) {
// 	if(typeof(arr[i]) == 'string'){
// 		strArr.push(arr[i]);
// 	}
// }
// console.log(strArr);




// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
//  {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, 
//  obby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. 
//  Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх
//  юзерів – job (true/false);


// let colection =  [
// 	{
// 		name: "Yura", 
// 		age: 55, 
// 		hobby: ["football", "ski", "hiking"], 
// 		type: "Admin"
// 	},
// 	{
// 		name: "Yulian", 
// 		age: 28, 
// 		hobby: ["films", "games", "hiking"], 
// 		type: "user"
// 	}, 
// 	{
// 		name: "Taras",
// 	  age: 38, 
// 		hobby: ["hunting", "TV", "javascript"], 
// 		type: "user"
// 	}
// ];
// let quest = confirm('Do you wanr add new job?');


// for (let i = 0; i < colection.length; i++){
// 	for(let key in colection[i]){
// 		if (key == "type") {
// 			if (colection[i][key] == "user") {
// 				console.log(colection[i].name);
// 			}
// 		}
// 		if (key == "hobby") {
// 			if(colection[i][key].indexOf('hiking') >= 0){
// 				console.log(colection[i].name)
// 			}
// 		}
// 	}
// 	if (quest){
// 		colection[i].job = confirm('Do you have jpb');
// 	}
// }
// console.log(colection);


// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з 
// сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.


// document.onkeydown = (e) => {

// 	if (e.ctrlKey && e.code == 'KeyC') {
// 		alert('Це інтелектуальна власність власника')
// 	}
// }


//5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з
// іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.



let countryUrl = "https://restcountries.eu/rest/v2/all";

window.onload = function () {
    node = fetch(countryUrl)
      .then(response => response.json())
      .then(result => node = result );
};

function country() {
	let ol = document.createElement('ol');
    for (let i = 0; i < node.length; i++){
        let li = document.createElement('li');
        li.textContent = `Country: ${node[i].name.toUpperCase()} ---  Capital: ${node[i].capital} ` ;
        ol.appendChild(li);
    }
  document.body.appendChild(ol);
}

