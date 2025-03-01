import {SportsEquipment} from "./SportsEquipment";

export class Barbell extends SportsEquipment {
  LIFESPAN: number = 1500;
  WEAR_RATE: number = 0.08;
  length: number;

  constructor(name: string, weight: number, material: string, length: number) {
    super(name, weight, material);
    if(length > 0) this.length = length;
    else throw new Error("Length is not correct!")
  }

  override calculateUsageTime(hoursOfUse: number): number {
    if(hoursOfUse <= 0) throw new Error("hoursOfUse must be greater than 0");
    else return this.LIFESPAN - (hoursOfUse * this.WEAR_RATE);
  }

  override displayInfo(): string {
    return (super.displayInfo() + 'Довжина = ' + this.length);
  }
}
