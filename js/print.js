const body = document.querySelector("body");

let productList;

const createPDF = () => {
    let sheet = "";
    for (let index = 0; index < productList.length; index++) {
        if (index === 0 || (index % 13) + 1 === 1) {
            sheet += `
            <table>
                <tr class="description-item">
                <td class="img">
                    <img src="img/logo.jpg" alt="" />
                </td>
                <td class="description-title">
                    <span class="text">${productList[index].description}</span>
                </td>
                <td class="description-ref">
                    <span class="text">Ref: ${productList[index].reference}</span>
                </td>
                <td class="description-price">
                    <span class="text">R$: ${productList[index].price}</span>
                </td>
            </tr>
            `;
        } else if (index % 13 === 0) {
            sheet += `
                <tr class="description-item">
                    <td class="img">
                        <img src="img/logo.jpg" alt="" />
                    </td>
                    <td class="description-title">
                        <span class="text">${productList[index].description}</span>
                    </td>
                    <td class="description-ref">
                        <span class="text">Ref: ${productList[index].reference}</span>
                    </td>
                    <td class="description-price">
                        <span class="text">R$: ${productList[index].price}</span>
                    </td>
                </tr>
            </table>
            `;
        } else {
            sheet += `
            <tr class="description-item">
                <td class="img">
                    <img src="img/logo.jpg" alt="" />
                </td>
                <td class="description-title">
                    <span class="text">${productList[index].description}</span>
                </td>
                <td class="description-ref">
                    <span class="text">Ref: ${productList[index].reference}</span>
                </td>
                <td class="description-price">
                    <span class="text">R$: ${productList[index].price}</span>
                </td>
            </tr>
            `;
        }
    }
    body.innerHTML = sheet;

    setTimeout(() => {
        print();
    }, 300);
};

const toCheckLocalStorage = () => {
    if (JSON.parse(localStorage.getItem("productList")) !== null) {
        productList = JSON.parse(localStorage.getItem("productList"));
    }
    createPDF();
   
};

toCheckLocalStorage();
