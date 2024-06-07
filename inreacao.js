var moreBtns = document.querySelectorAll('.more-btn');

    // Adiciona um evento de clique a cada botão
    // moreBtns.forEach(function(btn, index) {
    //     btn.addEventListener('click', function() {
    //         // Exibe a div flutuante correspondente ao botão clicado
    //         document.getElementById('floatingDiv' + (index + 1)).style.display = 'block';
    //     });
    // });

    function openModal(modalNumber) {
        var modalTitle = document.querySelector('.modal-title');
        var modalBody = document.querySelector('.modal-body');

        // Definindo o título e conteúdo do modal com base no botão clicado
        switch (modalNumber) {
            case 1:
                modalTitle.textContent = 'Autonomia e tempo de recarga';
                modalBody.innerHTML = '<p>Geralmente a autonomia das baterias de barcos elétricos não duram por muito tempo, obrigando a embarcação a fazer muitas paradas em uma só viagem, por isso desenvolvemos uma bateria comalta capacidade de cargas, diminuindo as paradas na viagem.</p>';
                break;
            case 2:
                modalTitle.textContent = 'Postos de recarga';
                modalBody.innerHTML = '<p>Geralmente a distância entre os pontos de carregamento dessas embarcações é muito distante uma da outra, por isso implementaremos posições estratégicas contendo postos de abastecimento para nossos clientes.</p>';
                break;
            case 3:
                modalTitle.textContent = 'Juntos com o meio ambiente';
                modalBody.innerHTML = '<p>Utilizando energia renovável, descartamos a combustão como fonte combustível, não poluindo o meio ambientee incentivando o uso de motores elétricos.</p>';
                break;
            default:
                break;
        }

        // Abrindo o modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }