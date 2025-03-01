import { SportsEquipment } from "./SportsEquipment";

export class Dumbbell extends SportsEquipment {
  LIFESPAN: number = 1000;
  WEAR_RATE: number = 0.05;
  isAdjustable: boolean;

  constructor(name: string, weight: number, material: string, isAdjustable: boolean) {
    super(name, weight, material);
    this.isAdjustable = isAdjustable;
  }

  override calculateUsageTime(hoursOfUse: number): number {
    if(hoursOfUse <= 0) throw new Error("hoursOfUse must be greater than 0");
    else return this.LIFESPAN - (hoursOfUse * this.WEAR_RATE);
  }

  override displayInfo(): string {
    return ( super.displayInfo() + 'Чи можна змінювати? = ' + this.isAdjustable );
  }
}
