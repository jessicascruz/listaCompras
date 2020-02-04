import { Injectable } from '@angular/core';
import { Produto } from './../_model/produto';


@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  public Produtos: Produto;

  produtos: Produto[]  = [
    { check: false, item: 'Celular', valor: 2000.00 },
    { check: false, item: 'Livro', valor: 20.00 },
    { check: false, item: 'Computador', valor: 2000.00 },
    { check: false, item: 'Relógio', valor: 1800.00 },
    { check: false, item: 'PlayStation 4', valor: 2300.00 },
    { check: false, item: 'TV 70 polegadas' , valor: 5400.00 },
    { check: false, item: 'Camisa', valor: 30.00 }
  ];

  getProdutos() {
    return this.produtos;
  }

  constructor() { }

}
