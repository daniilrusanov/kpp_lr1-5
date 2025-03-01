import { EquipmentFactory } from "../../../src/app/abstract-class/abstract/EquipmentFactory";
import {Dumbbell} from "../../../src/app/abstract-class/abstract/Dumbbell";

const createDumbbell = (name: any, weight: any, material: any, isAdjustable: any) => {
  return new Dumbbell(name, weight, material, isAdjustable);
};

describe("Dumbbell Tests", () => {
  it("should create an instance of Dumbbell", ()=>{
    cy.wrap(createDumbbell('Гантеля', 1, 'Метал', true))
      .should('exist');
  });

  it("should throw an error when weight is negative", ()=>{
    cy.wrap(() => createDumbbell('Гантеля', -5, 'Метал', true))
      .should('throw', 'Weight should be positive');
  });

  it("should throw an error when name is empty", ()=>{
    cy.wrap(() => createDumbbell('', 1, 'Метал', false))
      .should('throw', 'Names should not be undefined or empty');
  });

  it("should throw an error when material is empty", ()=>{
    cy.wrap(() => createDumbbell('Гантеля', 1, '', false))
      .should('throw', 'Material name should not be undefined');
  });

  it("should create a dumbbell by factory", () => {
    const dumbbellInfo = {
      name: 'Гантеля',
      weight: 1,
      material: 'Метал',
      isAdjustable: true
    };

    cy.wrap(EquipmentFactory.getEquipment(dumbbellInfo)).should('be.an.instanceOf', Dumbbell);
  });

  it("should correctly calculate usage time", ()=>{
    cy.wrap(createDumbbell('Гантеля', 1, 'Метал', 1))
      .invoke('calculateUsageTime', 200)
      .should('eq', 990);
  });
});
