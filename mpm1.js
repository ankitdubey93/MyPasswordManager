let formDataArray = [];




const saveNewPassword = () => {
  let website = document.getElementById('website').value;
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  let formData = {
    account: website,
    id: username,
    pass: password
  };

  console.log(formData);
  formDataArray.push(formData);
  console.log(formDataArray);
  saveToLocalStorage();
  loadFromLocalStorage();
  document.getElementById('myForm').reset();

}

const saveToLocalStorage = () => {
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  console.log('successfully saved');
}

const displayTable = () => {
  let tbody = document.getElementById('formDataTable').getElementsByTagName('tbody')[0];

  tbody.innerHTML = '';

  formDataArray.forEach(function (data) {
    let row = tbody.insertRow();
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);


    c1.textContent = data.account;
    c2.textContent = data.id;
    c3.textContent = data.pass;


    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {


    })


    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      handleDeleteButton(data);

    });

    c4.appendChild(editButton);
    c5.appendChild(deleteButton);

  });

}


const handleDeleteButton = (data) => {
  const index = formDataArray.indexOf(data);
  formDataArray.splice(index, 1);
  saveToLocalStorage();
  loadFromLocalStorage();
}



const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem('formDataArray');
  if (storedData) {
    formDataArray = JSON.parse(storedData);
    console.log('loaded');
    console.log(formDataArray);
    displayTable();
  }
}

const init = () => {
  window.onload = loadFromLocalStorage;
}


init();