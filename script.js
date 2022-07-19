const ism = document.getElementById('ism');
var familiya = document.getElementById('familiya');
var age = document.getElementById('age');
var viloyat = document.getElementById('viloyat');
var tables = document.getElementById('table');
var er = document.getElementById('er');
var ayol = document.getElementById('ayol');
var inner = '';


var btnAdd = document.getElementById('btn')

var client = [];

const update = () => {
  tables.innerHTML = client.map((item, i) => `<tr>
    <th scope="row">${i}</th>
    <td>${item.ism}</td>
    <td>${item.familiya}</td>
    <td>${item.age}</td>
    <td>${item.viloyat}</td>
    <td>${item.jinsi}</td>
  </tr>`).join('')
}
btnAdd.addEventListener('click', () => {
  var qiymat = er.checked == true ? 'erkak' : "---" && ayol.checked ? 'ayol' : '---';
  if (ism.value === "" || familiya.value === "" || age.value === '' || viloyat.value === '') {
    alert('Malumotni  kiriting')
  } else {
    client.push({
      ism: ism.value,
      familiya: familiya.value,
      age: age.value,
      viloyat: viloyat.value,
      jinsi: qiymat
    })
    update();
    saveToStorage()
  }
  ism.value = '';
  familiya.value = '';
  age.value = '';
  viloyat.value = '';
  console.log(client);
})




function addVil() {
  var sel = document.getElementById('myselect').selectedIndex;
  var options = document.getElementById('myselect').options;
  inner = options[sel].text
  console.log(inner);
  myFunction()
}

var searCl;

function myFunction() {
  var search = document.getElementById('search')
  var searchTwo = document.getElementById('searchTwo')
  var searchThree = document.getElementById('searchThree')
  searCl = client.filter(searchOne => {
    return searchOne.ism == search.value || searchOne.familiya == searchTwo.value || searchOne.age == searchThree.value || searchOne.viloyat == inner;
  });
  tables.innerHTML = searCl.map((item, i) => `<tr>
  <th scope="row">${i}</th>
  <td>${item.ism}</td>
  <td>${item.familiya}</td>
  <td>${item.age}</td>
  <td>${item.viloyat}</td>
  <td>${item.jinsi}</td>
</tr>`).join('');
  search.value = ''
  searchTwo.value = ''
  // searchThree.value = ''
}


window.onload = function () {
  if (localStorage.getItem('client')) {
    client = JSON.parse(localStorage.getItem('client'));
  }
  tables.innerHTML = client.map((item, i) => `<tr>
  <th scope="row">${i + 1}</th>
  <td>${item.ism}</td>
  <td>${item.familiya}</td>
  <td>${item.age}</td>
  <td>${item.viloyat}</td>
  <td>${item.jinsi}</td>
  </tr>`).join('');
 

 
}


function saveToStorage() {
  localStorage.setItem('client', JSON.stringify(client));
} 