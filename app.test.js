const funtions = require('./app')



test('checks character', ()=>{
    expect(funtions.sum('lala')).toBe(4);
})

test('reverses', ()=>{
    expect(funtions.add('lala')).toBe('alal')
})

test('capital', ()=>{
    expect(funtions.capitalize('lala')).toBe('Lala')
})