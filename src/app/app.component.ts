import { ListaCompras } from './../_model/listaCompras';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../_model/produto';
import { ListaProdutosService } from 'src/_service/listaProdutos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listaCompras';

  public produtos: any [];
  public itensCompras: any [];
  public listaVazia = true;
  displayedColumns = ['check', 'item', 'valor'];
  public listCompras: ListaCompras;

  constructor(public listaProdutos: ListaProdutosService) {}

  selecionado(index) {
    for (let i = 0; i < this.produtos.length; i++) {

      if (i === index) {
        this.produtos[i].check = this.produtos[i].check;
        // console.log('check', this.produtos[i].check);
      }
    }
  }

  comprar() {
    const compras: any [] = this.produtos.filter((item) => {
      return item.check === true;
    });

    this.itensCompras = compras;

    this.listaVazia = false;

    const valorTotal = this.itensCompras.map((animal) => {
      return animal.valor;
    });

    console.log(valorTotal);
  }


  ngOnInit() {
    this.produtos = this.listaProdutos.getProdutos();
  }



  // getTotalvalor() {
  //   return this.produtos.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  // }
}
