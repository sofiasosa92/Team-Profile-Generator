const Manager = require('../lib/manager');

const manager = new Manager('Damien', '3553', 'DamiP@yahoo.com', '12');

describe('Manager', () => {
    describe('Test manager properties', () => {
        it('test the name', () => {
            expect(manager.name).toEqual('Damien')
        })
        it('test the id', () => {
            expect(manager.id).toEqual('3553')
        })
        it('test the email', () => {
            expect(manager.email).toEqual('DamiP@yahoo.com')
        })
        it('test the office number', () => {
            expect(manager.officeNumber).toEqual('12')
        })
    })

    //test the getRole method

    describe('test employee role method', () => {
        it('test role', () => {
            expect(manager.getRole()).toEqual('Manager');
        })
    })
})
