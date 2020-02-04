/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaProdutosService } from './listaProdutos.service';

describe('Service: ListaProdutos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaProdutosService]
    });
  });

  it('should ...', inject([ListaProdutosService], (service: ListaProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
