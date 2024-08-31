const form = document.querySelector(".form");
const descriptionList = document.querySelector(".description-list");
const btnClean = document.querySelector(".btn-clean");

let productList = [];
let productListJson;

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const description = form.description.value.toUpperCase();
    const reference = form.reference.value.toUpperCase();
    const price = form.price.value;

    const product = {
        description,
        reference,
        price,
    };

    productList.unshift(product);
    addLocalStorage(productList);
    showProduct(productList);

    form.description.value = "";
    form.reference.value = "";
    form.price.value = "";

    form.description.focus();
});

/* exibe a descrição na tela */
const showProduct = () => {
    descriptionList.innerHTML = "";
    productList.forEach((product) => {
        descriptionList.innerHTML += `
            <tr class="description-item-box">
                <td class="description-item">
                    <span class="content"
                        >${product.description}</span
                    >
                </td>
                <td class="description-ref">
                    <span class="description-title-text">Ref:</span>
                    <span class="content">${product.reference}</span>
                </td>
                <td class="description-price">
                    <span class="description-title-text">R$:</span>
                    <span class="content">${product.price}</span>
                </td>
                <td class="options">
                    <button class="btn-edit">
                        <ion-icon
                            class="options-icon"
                            name="pencil-outline"
                        ></ion-icon>
                    </button>
                    <button class="btn-delete">
                        <ion-icon
                            class="options-icon"
                            name="trash-outline"
                        ></ion-icon>
                    </button>
                </td>
            </tr>
        `;
    });
    deleteProduct();
    editProduct();
};

/*Tira o produto da lista e leva de volta para edição */
const editProduct = () => {
    const btnsEdit = [...document.querySelectorAll(".btn-edit")];

    btnsEdit.forEach((item, index) => {
        item.addEventListener("click", () => {
            const product = productList.splice(index, 1);
            addLocalStorage(productList);
            form.description.value = product[0].description;
            form.reference.value = product[0].reference;
            form.price.value = product[0].price;
            showProduct(productList);
        });
    });
};

/* exclui o produto da lista */
const deleteProduct = () => {
    const btnsDelete = [...document.querySelectorAll(".btn-delete")];

    btnsDelete.forEach((item, index) => {
        item.addEventListener("click", () => {
            // item.closest(".description-item-box").remove();
            const deleteProduct = confirm("Você deseja excluir esse item?");
            if (deleteProduct) {
                productList.splice(index, 1);
                addLocalStorage(productList);
                showProduct(productList);
            } else {
                return;
            }
        });
    });
};

/* limpa a lista de produtos */
btnClean.addEventListener("click", (evt) => {
    const allClean = confirm("Deseja lipar tudo?");
    if (allClean) {
        productList.length = 0;
        addLocalStorage(productList);
        showProduct(productList);
    } else {
        return;
    }
});

const addLocalStorage = (productList) => {
    productListJson = JSON.stringify(productList);
    localStorage.setItem("productList", productListJson);
};

const verificar = () => {
    if (JSON.parse(localStorage.getItem("productList")) !== null) {
        productList = (JSON.parse(localStorage.getItem("productList")));
        console.log(productList)
        showProduct(productList)
    }
}
verificar()


