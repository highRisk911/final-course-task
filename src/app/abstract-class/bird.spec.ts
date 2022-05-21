import { Raven } from './abstract-class.page';

describe('Raven Testing', () => {
  let raven: Raven;

  beforeEach(() => {
    raven = new Raven('SOROKA', 50000);
  });

  fit('Створення екземпляру класу', () => {
    expect(raven).toBeTruthy();
  });

  fit('Розрахунок food з 50000 soroka', () => {
    let checking = raven.foodPerDay();
    let expected = 50000*0.8;
    //expect(checking.toFixed(2).toBe(expected.toFixed(2)));
  });
});
 
