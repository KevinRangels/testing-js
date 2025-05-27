import { expect, it } from 'vitest'
import { add } from './math'

it('Should summarize all number values in an array', () => {
    // Arrange
    const numbers = [1,2,3 ]
    const expectResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0    
    )
    const result = add(numbers)
    expect(result).toBe(expectResult)
})

it('Should yield NaN if a least one invalid number is provided', () => {
    const inputs = ['invalid', 1]

    const result = add(inputs)

    expect(result).toBeNaN()
})


it('Should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2']

    const result = add(numbers)

    const expectResult = numbers.reduce(
        (prevValue, curValue) => +prevValue + +curValue,
        0    
    )

    expect(result).toBe(expectResult)
})

it('Should yield 0 if an empty array is provided', () => {
    const numbers = []

    const result = add(numbers)

    expect(result).toBe(0)
})


it('Should throw an error if no value is passed into the function', () => {

    const resultFn = () => {
        add()
    }
    expect(resultFn).toThrow(/is not iterable/)
})

it('Should throw an error if provided with multiple arguments instead of an array', () => {

    const num1 = 1
    const num2 = 2


    const resultFn = () => {
        add(num1, num2)
    }
    expect(resultFn).toThrow(/is not iterable/)
})