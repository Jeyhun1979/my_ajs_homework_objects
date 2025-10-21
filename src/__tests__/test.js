import orderByProps from '../js/task';

describe('orderByProps', () => {
  test('should sort by given order and then alphabetically', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const order = ['name', 'level'];

    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('should return only sorted alphabetically if order is empty', () => {
    const obj = {
      z: 1,
      a: 2,
      m: 3,
    };
    const order = [];

    const expected = [
      { key: 'a', value: 2 },
      { key: 'm', value: 3 },
      { key: 'z', value: 1 },
    ];

    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('should ignore keys in order that do not exist in object', () => {
    const obj = {
      b: 1,
      a: 2,
    };
    const order = ['x', 'a'];

    const expected = [
      { key: 'a', value: 2 },
      { key: 'b', value: 1 },
    ];

    expect(orderByProps(obj, order)).toEqual(expected);
  });
});
