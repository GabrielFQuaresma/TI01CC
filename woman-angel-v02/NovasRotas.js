// NovasRotas.js

document.addEventListener('DOMContentLoaded', function() {
  const onibusCheckbox = document.getElementById('onibus');
  const metroCheckbox = document.getElementById('metro');
  const enviarButton = document.getElementById('enviar');

  enviarButton.addEventListener('click', function() {
    const data = {};

    if (onibusCheckbox.checked) {
      const campoMotorista = document.getElementById('campoMotorista').value;
      const campoNumero = document.getElementById('campoNumero').value;
      const campoDataOnibus = document.getElementById('campoData').value;
      const campoMore = document.getElementById('campoMore').value;

      // Obter banco de dados do localStorage
      let db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};

      // Verificar se já existe um objeto "rotasPerigosas" no banco de dados
      if (!db.rotasPerigosas) {
        // Se não existir, criar um novo objeto "rotasPerigosas"
        db.rotasPerigosas = {};
      }

      // Verificar se já existe um array "onibus" no objeto "rotasPerigosas"
      if (!db.rotasPerigosas.onibus) {
        // Se não existir, criar um novo array "onibus" no objeto "rotasPerigosas"
        db.rotasPerigosas.onibus = [];
      }

      // Obter o contador de IDs do ônibus
      let onibusID = localStorage.getItem('onibusID') ? parseInt(localStorage.getItem('onibusID')) : 1;

      // Criar o objeto de ônibus com o ID e as informações coletadas
      const novoOnibus = {
        id: onibusID,
        motorista: campoMotorista,
        numero: campoNumero,
        data: campoDataOnibus,
        more: campoMore
      };

      // Adicionar o objeto de ônibus ao array "onibus"
      db.rotasPerigosas.onibus.push(novoOnibus);

      // Incrementar o contador de IDs do ônibus
      onibusID++;

      // Salvar o contador de IDs do ônibus no localStorage
      localStorage.setItem('onibusID', onibusID);

      // Salvar o banco de dados atualizado no localStorage
      localStorage.setItem('db', JSON.stringify(db));

      // Exibir mensagem de sucesso
      const enviadoDiv = document.getElementById('enviado');
      enviadoDiv.textContent = 'Informações de ônibus salvas com sucesso!';
    }

    if (metroCheckbox.checked) {
      const campoEstacao = document.getElementById('campoEstacao').value;
      const campoDataMetro = document.getElementById('campoData').value;
      const sentidoVilarinho = document.getElementById('vilarinho').checked;
      const sentidoEldorado = document.getElementById('eldorado').checked;
      const campoMore = document.getElementById('campoMore').value;

      // Obter banco de dados do localStorage
      let db = localStorage.getItem('db') ? JSON.parse(localStorage.getItem('db')) : {};

      // Verificar se já existe um objeto "rotasPerigosas" no banco de dados
      if (!db.rotasPerigosas) {
        // Se não existir, criar um novo objeto "rotasPerigosas"
        db.rotasPerigosas = {};
      }

      // Verificar se já existe um array "metro" no objeto "rotasPerigosas"
      if (!db.rotasPerigosas.metro) {
        // Se não existir, criar um novo array "metro" no objeto "rotasPerigosas"
        db.rotasPerigosas.metro = [];
      }

      // Obter o contador de IDs do metrô
      let metroID = localStorage.getItem('metroID') ? parseInt(localStorage.getItem('metroID')) : 1;

      // Criar o objeto de metrô com o ID e as informações coletadas
      const novoMetro = {
        id: metroID,
        estacao: campoEstacao,
        data: campoDataMetro,
        sentido: sentidoVilarinho ? 'Vilarinho' : 'Eldorado',
        more: campoMore
      };

      // Adicionar o objeto de metrô ao array "metro"
      db.rotasPerigosas.metro.push(novoMetro);

      // Incrementar o contador de IDs do metrô
      metroID++;

      // Salvar o contador de IDs do metrô no localStorage
      localStorage.setItem('metroID', metroID);

      // Salvar o banco de dados atualizado no localStorage
      localStorage.setItem('db', JSON.stringify(db));

      // Exibir mensagem de sucesso
      const enviadoDiv = document.getElementById('enviado');
      enviadoDiv.textContent = 'Informações de metrô salvas com sucesso!';
    }
  });
});
