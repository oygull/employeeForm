let modalForm = document.getElementById('modalForm');
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let department = document.getElementById('department');

let nameList= document.getElementById('nameList');
let emailList= document.getElementById('emailList');
let numberList= document.getElementById('numberList');
let departmentList= document.getElementById('departmentList');
let actionBox = document.getElementById('actionBox');
let deleteBox = document.getElementById('deleteBox');

let arr = [];

modalForm.addEventListener('submit', (e)=>{
  nameList.innerHTML='';
  emailList.innerHTML='';
  numberList.innerHTML='';
  departmentList.innerHTML='';
  deleteBox.innerHTML ='';
  actionBox.innerHTML ='';

  e.preventDefault();
  let obj = {name: fullName.value, email: email.value, mobile: mobile.value, department: department.value}
  arr.push(obj);
  arr.forEach((item)=>{
    let nameItem = document.createElement('li');
    nameItem.innerHTML= item.name;
    nameItem.classList='list-item';
    nameList.appendChild(nameItem);

    let emailItem = document.createElement('li');
    emailItem.innerHTML= item.email;
    emailItem.classList='list-item';
    emailList.appendChild(emailItem);

    let mobileItem = document.createElement('li');
    mobileItem.innerHTML= item.mobile;
    mobileItem.classList='list-item';
    numberList.appendChild(mobileItem);

    let departmentItem = document.createElement('li');
    departmentItem.innerHTML= item.department;
    departmentItem.classList='list-item';
    departmentList.appendChild(departmentItem);

    let editBtn = document.createElement('div');
    editBtn.innerHTML = `<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="submit" class="edit-btn"><i class='bx bx-edit-alt'></i></button>`;
    actionBox.appendChild(editBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class='bx bx-x' ></i>`;
    deleteBtn.classList='delete-btn';
    deleteBox.appendChild(deleteBtn);
  })
console.log(arr);
})