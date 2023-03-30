let productos = []

class ProductManager {
    constructor() {
        this.products = productos
    }

    addProduct(newProduct){
        if (!newProduct.tittle || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock) return 'Todos los campos son necesarios.'

        let product = this.products.find(prod => prod.code == newProduct.code)
        if (product) return 'Un producto con este código ya fue ingresado.'

        return this.products.push({id: this.products.length + 1, ... newProduct})
    }
    getProducts(){
        return this.products
    }
    getProductById(id){
        let product = this.products.find(prod => prod.id == id)
        if (!product) return 'Producto no encontrado.'
        return product
    }
    updateProduct(){

    }
    deleteProduct(id){
        return this.products.splice(id-1,1)
    }

}

const product = new ProductManager()

// Añadir objetos
console.log(product.addProduct({
    tittle: 'Producto 1',
    description: 'Una descripcion',
    price: '$115',
    thumbnail: 'link',
    code: 001,
    stock: 100
}))
console.log(product.addProduct({
    tittle: 'Producto 2',
    description: 'Una descripcion',
    price: '$125',
    thumbnail: 'link',
    code: 001,      // prueba
    stock: 200
}))
console.log(product.addProduct({
    tittle: 'Producto 3',
    description: 'Una descripcion',
    price: '$135',
    thumbnail: 'link',
    code: 003,
    // stock: 300        // prueba
}))
console.log(product.addProduct({
    tittle: 'Producto 4',
    description: 'Una descripcion',
    price: '$145',
    thumbnail: 'link',
    code: 004,
    stock: 400
}))
console.log(product.addProduct({
    tittle: 'Producto 5',
    description: 'Una descripcion',
    price: '$155',
    thumbnail: 'link',
    code: 005,
    stock: 500
}))
// Obtener todos los productos
console.log(product.getProducts());
// Buscar el producto por id
console.log(product.getProductById(4));
// Borrar un producto
product.deleteProduct(3)
console.log(product.getProducts());