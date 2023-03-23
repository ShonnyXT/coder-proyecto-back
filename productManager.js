let productos = []

class productManager {
    constructor () {
        this.products = productos
    }

    addProduct(newProduct) {
        if (!newProduct.title || !newProduct.description || !newProduct.price || !newProduct.thumbnail || !newProduct.code || !newProduct.stock) return 'Todos los campos son obligatorios'

        let product = this.products.find(prod => prod.code === newProduct.code)
        if (product) return 'Un producto con este codigo ya fué ingresado'

        return this.products.push({id: this.products.length+1, ... newProduct})
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        let product = this.products.find(prod => prod.id === id)
        if (!product) return 'Product Not Found'
        return product
    }

}

const product = new productManager()

/* product.addProduct({title: 'Producto'}) */
product.addProduct({
    title: 'Producto 1',
    description: 'Una descripción',
    price: 1000,
    thumbnail: 'link',
    code: 001,
    stock: 999
})
console.log(product.addProduct({
    title: 'Producto 2',
    description: 'Una descripción',
    price: 1000,
    thumbnail: 'link',
    code: 002,
    stock: 999
}))

console.log(product.getProducts())