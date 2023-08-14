class CaixaDaLanchonete {
    constructor(){
        this.carrinho = {}
        this.formasDePagamento = ["dinheiro", "credito", "debito"]
        this.cardapio = {
            "cafe" : 3.00,
            "chantily" : 1.50,
            "suco" : 6.20,
            "sanduiche" : 6.50,
            "queijo" : 2.00,
            "salgado" : 7.25,
            "combo1" : 9.50,
            "combo2" : 7.50
        }
    }  

    calcularValorDaCompra(metodoDePagamento, itens) {
        try {
            this.verificarProdutoNoCarrinho(metodoDePagamento, itens)
            this.addItensNoCarrinho(itens)
            this.validaItensExtras()

            const totalNoCarrinho = this.calcularPrecoNoCarrinho()
            const total = this.adicionaMeioDePagamento(metodoDePagamento, totalNoCarrinho)

            return `R$ ${total.toFixed(2).replace('.', ',')}`
        } catch (error) {
            return error
        }      
    }

    verificarSeItemExiste(nomeDoItem){
        if(this.cardapio.hasOwnProperty(nomeDoItem))
            return true
        throw  'Item inválido!'
    }

    validaQuantidade(quantidade) {
        if (quantidade == 0)
            throw 'Quantidade inválida!'
        if (quantidade == null)
            throw 'Item inválido!'
    }

    verificarProdutoNoCarrinho(metodoDePagamento, itens){
        if (!this.formasDePagamento.includes(metodoDePagamento))
            throw 'Forma de pagamento inválida!'
        if (itens == 0)
            throw 'Não há itens no carrinho de compra!'
    }

    verificarSeContemItemPrincipal(nome){
        if(!this.carrinho.hasOwnProperty(nome))
            throw 'Item extra não pode ser pedido sem o principal'
    }

    validaItensExtras() {
        for (const item of Object.keys(this.carrinho)) {
            if (item == "chantily") {
                this.verificarSeContemItemPrincipal('cafe')
            } 
            if (item == "queijo") {
                this.verificarSeContemItemPrincipal('sanduiche')
            }
        }
    }

    addItensNoCarrinho(itens){
        for (const item of itens) {
            const [nome, quantidade] = item.split(',')

            this.validaQuantidade(quantidade)
            
            if(this.verificarSeItemExiste(nome)) {
                this.carrinho[nome] = quantidade
            }
        }
    }

    calcularPrecoNoCarrinho(){
        let total = 0
        for (const item of Object.keys(this.carrinho)){
            total += this.cardapio[item] * this.carrinho[item]
        }
        return total
    }

    adicionaMeioDePagamento(metodoDePagamento, total){
        if (metodoDePagamento == 'dinheiro')
            return total / 100 * 95

        if (metodoDePagamento == 'credito')
            return total / 100 * 103

        return total
    } 
}
export { CaixaDaLanchonete };
