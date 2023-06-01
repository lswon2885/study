function add(x: number, y: number): number {
	return x + y;
}

test('add', () => {
	expect(add(1, 2)).toBe(3);
});

describe('add', () => {
	it('두숫자의 합을 리턴한다.', () => {
		expect(add(1, 2)).toBe(3);
	});
});
