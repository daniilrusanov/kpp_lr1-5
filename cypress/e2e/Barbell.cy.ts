import { TennisRacket } from "../../src/app/abstract-class/abstract/TennisRacket";
import { EquipmentFactory } from "../../src/app/abstract-class/abstract/EquipmentFactory";
import {Barbell} from "../../src/app/abstract-class/abstract/Barbell";

const createBarbell = (name: any, weight: any, material: any, length: any) => {
  return new TennisRacket(name, weight, material, length);
};

describe("Barbell Tests", () => {
  it("should create an instance of TennisRacket", ()=>{
    cy.wrap(createBarbell('Штанга', 1, 'Метал', 5))
      .should('exist');
  });

  it("should throw an error when weight is negative", ()=>{
    cy.wrap(() => createBarbell('Штанга', -5, 'Метал', 5))
      .should('throw', 'Weight should be positive');
  });

  it("should throw an error when length is negative", ()=>{
    cy.wrap(() => createBarbell('Штанга', 1, 'Метал', -5))
      .should('throw', 'Grip size is not correct!');
  });

  it("should throw an error when name is empty", ()=>{
    cy.wrap(() => createBarbell('', 1, 'Метал', 1))
      .should('throw', 'Names should not be undefined or empty');
  });

  it("should throw an error when material is empty", ()=>{
    cy.wrap(() => createBarbell('Штанга', 1, '', 1))
      .should('throw', 'Material name should not be undefined');
  });

  it("should create a barbell by factory", () => {
    const barbellInfo = {
      name: 'Штанга',
      weight: 1,
      material: 'Метал',
      length: 1
    };

    cy.wrap(EquipmentFactory.getEquipment(barbellInfo)).should('be.an.instanceOf', Barbell);
  });

  it("should correctly calculate usage time", ()=>{
    cy.wrap(createBarbell('Штанга', 1, 'Метал', 1))
      .invoke('calculateUsageTime', 200)
      .should('eq', 480);
  });
});
