import { compute } from './compute'

describe('compute', () => {

    it('should return 0 if negative input', () => {
        const result = compute(-1)
        expect(result).toBe(0)
    })

    it('should increment if positive input', () => {
        const result = compute(1)
        expect(result).toBe(2)
    })

})