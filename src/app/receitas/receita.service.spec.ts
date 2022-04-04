/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReceitaService } from './receita.service';

describe('Service: Receita', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReceitaService]
    });
  });

  it('should ...', inject([ReceitaService], (service: ReceitaService) => {
    expect(service).toBeTruthy();
  }));
});
