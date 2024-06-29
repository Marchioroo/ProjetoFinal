

document.addEventListener('DOMContentLoaded', function() {
    
    var dateInput = document.getElementById('data');
    var validaBotao = document.querySelector('.btn__primary');
    var modal = document.getElementById('modalIdade');
    if(modal){
        var closeBtn = modal.querySelector('.close');
        if(dateInput){
            dateInput.addEventListener('click', function(event) {
                dateInput.showPicker();
                validaBotao.addEventListener('click', function(event) {
                    event.preventDefault();
            
                    // Obtém a data de nascimento do input
                    var dataNascimento = new Date(dateInput.value);
                    var hoje = new Date();
                    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
                    var mes = hoje.getMonth() - dataNascimento.getMonth();
            
                    // Verifica se ainda não fez aniversário neste ano
                    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
                        idade--;
                    }
            
                    // Se for menor que 18 anos, abre o modal
                    if (idade < 18) {
                        modal.style.display = 'block';
                    } else {
                        // Se for maior ou igual a 18 anos, permite acesso ou exibe outra mensagem
                        alert('Você pode acessar o jogo!');
                    }
                });
            
                // Fecha o modal se o usuário clicar no botão de fechar
                
                closeBtn.addEventListener('click', function() {
                    modal.style.display = 'none';
                });
            
                // Fecha o modal se o usuário clicar fora da área do modal
                window.addEventListener('click', function(event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
                    
                
            });
        }
    }
});


    document.addEventListener('DOMContentLoaded', function() {


    const cadastroLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".login-link");


    if(cadastroLink){
        cadastroLink.addEventListener('click', () => {
            const wrapper = document.querySelector(".wrapper");
            wrapper.classList.add("active");
        });
    }

    if(loginLink){
        
        loginLink.addEventListener('click', () => {
            const wrapper = document.querySelector(".wrapper");
            wrapper.classList.remove("active");
        });
    }
});