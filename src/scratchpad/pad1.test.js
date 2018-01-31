import {uppsercase} from "./pad1"

describe('pad 1 testing', () => {
    test('uppercase with real value', function(){
        let input = 'testing'
        expect(uppsercase(input)).toBe('TESTING')
    })
})

function append(item, existingList){
    if (existingList == null){
        existingList = []
    }
    existingList.push(item)
    return existingList
}

describe('append testing', () => {
    test('adding one element', () => {
        let item = 'test'
        let list = ['two']
        append(item, list)
        expect(list).toEqual(['two', 'test'])
    })
})