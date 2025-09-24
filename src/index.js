import * as cartServe from "./services/cart.js";
import createItem from "./services/item.js";

// inicializar vetor vazio
const cart = [];

// criar item
const item1 = await createItem("Celular Samsung A30", 1350, 2);
const item2 = await createItem("Notebook Asus      ", 2370, 1);
const item3 = await createItem("Fone de ouvido     ",  3000, 3);

// adicionar item
await cartServe.addItem(cart, item1);
await cartServe.addItem(cart, item2);
await cartServe.addItem(cart, item3);

// remover item
await cartServe.removeItem(cart, item1);
await cartServe.removeItem(cart, item3);

// Extrato da compra
await cartServe.mostrarResumo(cart);

