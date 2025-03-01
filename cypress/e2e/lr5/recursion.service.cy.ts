import 'zone.js';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { RecursionService } from '../../../src/app/servicepage/logger/recursion/recursion.service';
import { LogService } from '../../../src/app/servicepage/logger/log/log.service';

describe('RecursionService', () => {
  let service: RecursionService;

  before(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
    service = new RecursionService(new LogService());
  });

  it('should be created', () => {
    expect(service).to.exist;
  });

  it('Сума ряду за допомогою рекурсії значення x=0.1 y=0.9983', () => {
    const x = 0.1;
    const actual = service.getRecursion(x, -1, 1, 2, 1);
    const expected = 0.9983;

    expect(+actual.toFixed(4)).to.be.closeTo(expected, 0.0001);
  });
});
