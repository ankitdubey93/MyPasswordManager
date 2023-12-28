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


    c1.textContent = data.account;
    c2.textContent = data.id;
    c3.textContent = data.pass;

  });
}