import { expect, it } from 'vitest'
import { transformToNumber } from './numbers'

it('Should transform a string number to a number of type number', () => {
    // Arrange
    const number = '1'
    const result = transformToNumber(number)

    expect(result).toBe(1)
})