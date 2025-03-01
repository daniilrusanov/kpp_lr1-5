import 'zone.js';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { SeriesService } from '../../../src/app/servicepage/logger/series/series.service';
import {LogService} from "../../../src/app/servicepage/logger/log/log.service";

describe('SeriesService', () => {
  let service: SeriesService;

  before(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeriesService]
    });
    service = new SeriesService(new LogService());
  });

  it('should be created', () => {
    expect(service).to.exist;
  });

  it('Сума ряду значення x=0.1 y=0.9983', () => {
    let x = 0.1;
    let expected = 0.9983;
    let actual = service.getSeries(x);
    expect(+actual.toFixed(4)).to.be.closeTo(expected, 0.0001);
  });
});
