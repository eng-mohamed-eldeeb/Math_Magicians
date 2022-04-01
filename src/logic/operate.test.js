import operate from './operate';

test('It adds correctly', () => {
  expect(operate('1', '2', '+')).toBe('3');
});

test('It subtracts correctly', () => {
  expect(operate('1', '2', '-')).toBe('-1');
});

test('It multiplies correctly', () => {
  expect(operate('2', '2', 'x')).toBe('4');
});

test('It divides correctly', () => {
  expect(operate('1', '2', '÷')).toBe('0.5');
});

test('It modules correctly', () => {
  expect(operate('10', '3', '%')).toBe('1');
});
