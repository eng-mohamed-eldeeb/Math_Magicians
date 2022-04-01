import calculate from './calculate';

test('It clears correctly', () => {
  const obj = {
    total: 0,
    next: '23',
    operation: '+',
  };
  const resultObj = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(obj, 'AC')).toEqual(resultObj);
});

test('It takes a number correctly', () => {
  const obj = {
    total: 0,
    next: '23',
    operation: '+',
  };
  const resultObj = {
    total: 0,
    next: '233',
    operation: '+',
  };

  expect(calculate(obj, '3')).toEqual(resultObj);
});

test('It takes the dot correctly', () => {
  const obj = {
    total: 0,
    next: '23',
    operation: '+',
  };
  const resultObj = {
    total: 0,
    next: '23.',
    operation: '+',
  };

  expect(calculate(obj, '.')).toEqual(resultObj);
});

test('It gives the result correctly', () => {
  const obj = {
    total: 1,
    next: '23',
    operation: '+',
  };
  const resultObj = {
    total: '24',
    next: null,
    operation: null,
  };

  expect(calculate(obj, '=')).toEqual(resultObj);
});

test('It changes the sign correctly', () => {
  const obj = {
    total: 1,
    next: '23',
    operation: '+',
  };
  const resultObj = {
    total: 1,
    next: '-23',
    operation: '+',
  };

  expect(calculate(obj, '+/-')).toEqual(resultObj);
});
