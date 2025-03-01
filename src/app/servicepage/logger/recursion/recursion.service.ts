import {Injectable, Optional} from "@angular/core";
import {LogService} from "../log/log.service";

@Injectable({
  providedIn: "root",
})

export class RecursionService {
  private xy: Map<any, any> = new Map();

  constructor(@Optional() private log: LogService) {
  }

  getRecursion(x: number, mem: number, mul: number, n: number, sum: number): number {
    let sqr = x * x,
      min = 1e-12;

    mem = (mem * sqr) / ((2 * n - 1) * (2 * n - 2));
    sum = sum + mul * mem;
    mul = -mul;
    n++;

    if (Math.abs(mem) > min) {
      return this.getRecursion(x, mem, mul, n, sum);
    }
    return sum;
  }


  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.01) {
    let x = xn;

    while (x <= xk) {
      let y = this.getRecursion(x, 1, -1, 2, 1.0);
      this.xy.set(x.toFixed(2), y.toFixed(2));
      if (this.log) this.log.write('x=' + x.toFixed(2) + ', y=' + y.toFixed(4));
      x = x + h;
    }

    return this.xy;
  }

}

