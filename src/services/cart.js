import formatCurrency from "../utils/formatter.js";

// Adiciona um item ao carrinho
async function addItem(cart, item) {
    cart.push(item);
}

// Remove uma unidade do item ou exclui se for a última
async function removeItem(cart, item) {
    const index = cart.findIndex((p) => p.name === item.name);

    if (index === -1) return;

    const currentItem = cart[index];

    if (currentItem.quantity > 1) {
        currentItem.quantity -= 1;
    }else {
        cart.splice(index, 1);
    }

}

// Exibe o resumo geral do carrinho
async function mostrarResumo(cart) {
    cart.forEach((item, index) => {
        console.log("\n|=======================================|");
        console.log(`| ${index + 1}. ${item.name} = Und: ${item.quantity}x      |`);
        console.log("|                                       |")
        console.log(`| Preço unitário: ${formatCurrency(item.price)}           |`);
        console.log(`| Subtotal: ${formatCurrency(item.subtotal())}                 |`);
        console.log("|=======================================|")
    });

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
    const valorTotal = cart.reduce((acc, item) => acc + item.subtotal(), 0);

    console.log(`\n\nTotal de itens: ${totalItem}`);
    console.log("\n****************************\n");
    console.log(`Valor total: ${formatCurrency(valorTotal)}\n\n`)
}




export { addItem, removeItem, mostrarResumo}