const formComentario = document.querySelector('.form__comentario');
const formTextArea = document.querySelector('.form__textarea');
const ulComentarios = document.querySelector('.comentarios__lista');

const btnAddComentario = document.querySelector('.form__btn-add');
const btnCancelarComentario = document.querySelector('.form__btn-cancelar');

const localStorageComentarios = localStorage.getItem('listaDeComentarios');
let listaDeComentarios = localStorageComentarios ? JSON.parse(localStorageComentarios) : [];

const updateLocalStorage = () => {
  localStorage.setItem('listaDeComentarios', JSON.stringify(listaDeComentarios))
}

btnAddComentario.addEventListener('click', () => {
    formComentario.classList.toggle('form__hidden');
    formComentario.reset();
});

btnCancelarComentario.addEventListener('click', () => {
    formComentario.reset();
    formComentario.classList.toggle('form__hidden');
});

const criaComentario = (comentario) => {

    const li = document.createElement('li');
    li.classList.add('box-coment');

    li.innerHTML = `
    <div class="user">
    <img src="images/logo.png" id="imagem-coment" alt="" />
    <div>
      <div class="content-coment">
        <div id="comentario__user">Anônimo</div>
        <div class="coment__avaliacao">
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
          <i class="ri-star-s-line"></i>
        </div>
      </div>
      <p class="comentario__p">${comentario}</p>
    </div>
  </div>

    `

    ulComentarios.appendChild(li);
}

listaDeComentarios.forEach((comentario) => {
  criaComentario(comentario)
});

formComentario.addEventListener('submit', (e) => {
    e.preventDefault();

    const comentario = formTextArea.value;
    listaDeComentarios.push(comentario);
    criaComentario(comentario);

    formComentario.reset();
    formComentario.classList.toggle('form__hidden');
    updateLocalStorage();
});
