export abstract class SportsEquipment {
  name: string;
  weight: number;
  material: string;

  protected constructor(name: string, weight: number, material: string) {
    if (!name) throw new Error('Names should not be undefined or empty');
    if (weight <= 0) throw new Error('Weight should be positive');
    if (!material) throw new Error('Material name should not be undefined');

    this.name = name;
    this.weight = weight;
    this.material = material;
  }

  public getWeight() {
    return this.weight;
  }

  displayInfo() {
    return (
      'Назва = ' + this.name + ' ' +
      'Вага = ' + this.weight + ' ' +
      'Матеріал = ' + this.material + ' '
    );
  }
}
