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