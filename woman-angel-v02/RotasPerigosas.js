document.addEventListener('DOMContentLoaded', function() {
  const onibusCheckbox = document.getElementById('onibus');
  const metroCheckbox = document.getElementById('metro');

  const onibusInputs = document.querySelectorAll('.inputBox.onibus');
  const metroInputs = document.querySelectorAll('.inputBox.metro');

  onibusCheckbox.addEventListener('change', function() {
    if (this.checked) {
      onibusInputs.forEach(function(input) {
        input.style.display = 'block';
      });
      metroInputs.forEach(function(input) {
        input.style.display = 'none';
      });
    }
  });

  metroCheckbox.addEventListener('change', function() {
    if (this.checked) {
      onibusInputs.forEach(function(input) {
        input.style.display = 'none';
      });
      metroInputs.forEach(function(input) {
        input.style.display = 'block';
      });
    }
  });
});

function imprimeDados() {
  let strHTML = '';
  const db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};

  if (db.rotasPerigosas) {
    const onibusDiv = document.getElementById('onibus');
    const metroDiv = document.getElementById('metro');

    if (db.rotasPerigosas.onibus) {
      for (let i = 0; i < db.rotasPerigosas.onibus.length; i++) {
        strHTML += `<p><h1>${db.rotasPerigosas.onibus[i].motorista}, ${db.rotasPerigosas.onibus[i].numero} - ${db.rotasPerigosas.onibus[i].data}</h1>${db.rotasPerigosas.onibus[i].more}</p>`;
      }

      onibusDiv.innerHTML = strHTML;
      strHTML = '';
    }

    if (db.rotasPerigosas.metro) {
      for (let i = 0; i < db.rotasPerigosas.metro.length; i++) {
        strHTML += `<p><h1>${db.rotasPerigosas.metro[i].estacao}, ${db.rotasPerigosas.metro[i].data} - ${db.rotasPerigosas.metro[i].sentido}</h1>${db.rotasPerigosas.metro[i].more}</p>`;
      }

      metroDiv.innerHTML = strHTML;
    }
  }
}