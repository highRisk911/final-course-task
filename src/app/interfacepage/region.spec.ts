import { Place, Region } from './interfacepage.page';

describe('Region Testing', () => {
  let place: Place;
  let region: Region;
  beforeEach(() => {
    place = new Place('Kyiv, Exhibition center', 'Metro');
    region = new Region('Kyiv', 4, 7);
  });
  fit('Створення екземпляру класу Place', () => {
    expect(place).toBeTruthy();
  });
  fit('Створення екземпляру класу Region', () => {
    expect(region).toBeTruthy();
  });
  fit('Перевірка роботи метода changeNamePlace', () => {
    place.changeNamePlace('New Metro');
    expect(place.namePlace).toBe('New Metro');
  });
  fit('Перевірка роботи метода aboutRegion', () => {
    expect(region.aboutRegion()).toBe(
      'Цей регіон має метрополіс Kyiv та 7 міст'
    );
  });
  fit('Перевірка роботи метода renameCity', () => {
    region.renameCity('City1', 'NewNameCity');
    expect(region.cities[0].nameCity).toBe('NewNameCity');
  });
});
