const btnPrint = document.querySelector(".btn-print");
const btnAddItem = document.querySelector(".btn-add");
const btnClean = document.querySelector(".btn-clean");
const descriptionPdf = document.querySelector(".description-pdf");

btnPrint.addEventListener("click", () => {
    print();
});

btnAddItem.addEventListener("click", () => {
    console.log("peguei o botão adicionar item");
    descriptionPdf.innerHTML += `<div class="description-item">
    <div class="img">
        <img src="img/logo.jpg" alt="logo ponto da moda">
    </div>
    <div class="name">
        <input type="text">
    </div>
    <div class="reference">
        <span class="description-title">Ref:</span>
        <input type="text">
    </div>
    <div class="price">
        <span class="description-title">R$:</span>
        <input type="number">
    </div>
    </div>`;
});

btnClean.addEventListener("click", () => {
    window.location.reload(true);
});
