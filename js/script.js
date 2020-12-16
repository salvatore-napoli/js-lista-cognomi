var userSurname = prompt('Qual è il tuo cognome?');
if (!userSurname) {
  alert('Inserisci un cognome.');
  location.reload();
} else if (userSurname[0].toLowerCase() === userSurname[0]) {
  alert('Il cognome deve iniziare con una lettera maiuscola.');
  location.reload();
}

var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
surnames.push(userSurname);
surnames.sort();

var surnameList = document.getElementById('surname-list');
for (var i = 0; i < surnames.length; i++) {
  surnameList.innerHTML += '<li>' + surnames[i] + '</li>';
}

document.getElementById('surname-position').innerText = 'Sei alla posizione n. ' + (surnames.indexOf(userSurname) + 1) + ' della lista.';
