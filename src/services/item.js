
async function createItem(name, price, quantity) {
    if(!name || typeof price !== "number" || typeof quantity !== "number") {
        throw new Error("Dados inválidos para criar item.");
    }

    return {
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity;
        },
    };
}

export default createItem;