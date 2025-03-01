import 'zone.js';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { TabService } from '../../../src/app/servicepage/logger/tab/tab.service';
import { LogService } from '../../../src/app/servicepage/logger/log/log.service';

describe('TabService', () => {
  let service: TabService;

  before(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
    service = new TabService(new LogService());
  });

  it('should be created', () => {
    expect(service).to.exist;
  });

  it('Табулювання при x=0.1', () => {
    const xy = service.getTab(0.1, 0.1, 0.1);

    expect(xy.x.length).to.equal(1);
    expect(xy.y.length).to.equal(1);

    const actual = xy.y[0];
    const expected = 0.9535;
    expect(+actual.toFixed(4)).to.be.closeTo(expected, 0.0001);
  });
});
