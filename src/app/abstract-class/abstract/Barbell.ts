import { SportsEquipment } from "./SportsEquipment";

export class Barbell extends SportsEquipment {
  length: number;

  constructor(name: string, weight: number, material: string, length: number) {
    super(name, weight, material);
    this.length = length;
  }

  override displayInfo(): string {
    return ( super.displayInfo() + 'Довжина = ' + this.length );
  }
}
