import { CounterComponent } from "./counter.component"

describe('CounterComponent', () => {

    let component: CounterComponent

    beforeEach(() => {
        component = new CounterComponent()
    })
    
    it('should increment counter by 1', () => {
        component.increment()
        expect(component.counter).toBe(1)
    })

    it('should decriment counter by 1', () => {
        component.decrement()
        expect(component.counter).toBe(-1)
    })

    it('should increment value by event emitter', () => {
        let result: number | null = null
        component.counterEmitter.subscribe(v => result = v)

        component.increment()

        expect<number | null>(result).toBe(1)
    })

})