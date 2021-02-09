import { memo } from './index';

describe('Test Memo', () => {
    test('Should memoize when deps are objects', () => {
        const exec = jest.fn((arg: number) => {
            return arg;
        });

        let memoExec = memo(exec);

        let dep1 = { a: 1 };
        let dep2 = [5];
        let result = memoExec([1], [dep1, dep2]);
        expect(result).toBe(1);
        result = memoExec([2], [dep1, dep2]);
        expect(result).toBe(1);
        expect(exec).toBeCalledTimes(1);
    });

    test('Should call underlying method when deps array has unequal length.', () => {
        const exec = jest.fn((arg: number) => {
            return arg;
        });

        let memoExec = memo(exec);

        let dep1 = { a: 1 };
        let dep2 = [5];
        let result = memoExec([1], [dep1, dep2]);
        expect(result).toBe(1);
        result = memoExec([2], [dep1]);
        expect(result).toBe(2);
        expect(exec).toBeCalledTimes(2);
    });

    test('Should call underlying method when deps array has unequal members.', () => {
        const exec = jest.fn((arg: number) => {
            return arg;
        });

        let memoExec = memo(exec);

        let dep1 = { a: 1 };
        let dep2 = [5];
        let result = memoExec([1], [dep1, dep2]);
        expect(result).toBe(1);
        result = memoExec([2], [dep1, dep1]);
        expect(result).toBe(2);
        expect(exec).toBeCalledTimes(2);
    });
})