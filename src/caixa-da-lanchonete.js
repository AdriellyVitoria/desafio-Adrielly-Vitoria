class CaixaDaLanchonete {
    constructor(){
        this.carrinho = []
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
        if (!this.formasDePagamento.includes(metodoDePagamento))
            return 'Forma de pagamento inválida!'
        if (itens == 0)
            return 'Não há itens no carrinho de compra!'
        
        try {
            this.addItensNoCarrinho(itens)
        } catch (e) {
            return e
        }
        return "";
    }

    addItensNoCarrinho(itens){
        itens.forEach(item => {
            const [nome, quantidade] = item.split(',')
            console.log(nome)       
        })
    }

}

export { CaixaDaLanchonete };
