import {Injectable, Optional} from "@angular/core";
import {LogService} from "../log/log.service";

@Injectable({
  providedIn: "root",
})

export class SeriesService {
  private xy = new Map();

  constructor(@Optional() private log: LogService) {
  }

  getSeries(x: number) {
    let sum: number = 1,
      sqr = x * x,
      min = 1e-12,
      mem = 1,
      n = 1,
      mul = -1;

    do {
      n++;
      mem = (mem * sqr) / ((2 * n - 1) * (2 * n - 2));
      sum = sum + mul * mem;
      mul = -mul;
    } while (mem > min || mem < -min);

    return sum;
  }


  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.01) {
    let x = xn,
      y = 0.0;

    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x.toFixed(2), y.toFixed(2));

      if (this.log) this.log.write('x=' + x.toFixed(2) + ', y=' + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }

}

