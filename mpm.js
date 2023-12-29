let formDataArray = [];




const savePassword = () => {
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


  displayFormData();
  saveToLocalStorage();

  document.getElementById('myForm').reset();

}



const displayFormData = () => {


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
      populateEditform(data);

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
  if (index !== -1) {
    formDataArray.splice(index, 1);
    displayFormData();
    saveToLocalStorage();
  }
}


const populateEditform = (data) => {
  document.getElementById('website').value = data.account;
  document.getElementById('username').value = data.id;
  document.getElementById('password').value = data.pass;

  document.getElementById('submitButton').textContent = 'Update';
  document.getElementById('submitButton').removeEventListener('click', savePassword);
  document.getElementById('submitButton').addEventListener('click', function () {

    updateData(data);

  })
}

const updateData = (data) => {

  data.account = document.getElementById('website').value;
  data.id = document.getElementById('username').value;
  data.pass = document.getElementById('password').value;


  document.getElementById('myForm').reset();


  displayFormData();
  saveToLocalStorage();

  document.getElementById('submitButton').textContent = 'Submit';
  document.getElementById('submitButton').removeEventListener('click', updateData);
  document.getElementById('submitButton').addEventListener('click', savePassword);
}



const saveToLocalStorage = () => {
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  console.log('success');
}

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem('formDataArray');
  if (storedData) {
    formDataArray = JSON.parse(storedData);
    displayFormData();
  }
}



window.onload = loadFromLocalStorage;

