import { SportsEquipment } from "./SportsEquipment";

export class TennisRacket extends SportsEquipment {
  LIFESPAN: number = 500;
  WEAR_RATE: number = 0.1;
  gripSize: number;

  constructor(name: string, weight: number, material: string, gripSize: number) {
    super(name, weight, material);
    if(gripSize > 0) this.gripSize = gripSize;
    else throw new Error("Grip size is not correct!")
  }

  override calculateUsageTime(hoursOfUse: number): number {
    if(hoursOfUse <= 0) throw new Error("hoursOfUse must be greater than 0");
    else return this.LIFESPAN - (hoursOfUse * this.WEAR_RATE);
  }

  override displayInfo(): string {
    return (super.displayInfo() + 'Розмір рукоятки = ' + this.gripSize);
  }
}
