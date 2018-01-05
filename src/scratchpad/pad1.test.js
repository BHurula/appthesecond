import {uppsercase} from "./pad1"

describe('pad 1 testing', () => {
    test('uppercase with real value', function(){
        let input = 'testing'
        expect(uppsercase(input)).toBe('TESTING')
    })
})
