const Employee = require('../lib/employee');
const employee = new Employee('Sofia', '7682', 'ssosa@aol.com');
describe('Employee', () => {
    describe('test employee properties', () => {
        it('test the name', () => {
            expect(employee.name).toEqual('Sofia')
        })
        it('test the id', () => {
            expect(employee.id).toEqual('7682')
        })
        it('test the email', () => {
            expect(employee.email).toEqual('ssosa@aol.com')
        })
    })

    describe('test employee methods', () => {
        it('test getName', () => {
            expect(employee.getName()).toEqual('Sofia')
        })

        it('test getId', () => {
            expect(employee.getId()).toEqual('7682')
        })

        it('test getEmail', () => {
            expect(employee.getEmail()).toEqual('ssosa@aol.com')
        })
        
        //to pass the getRole: inside the == function pass the employee string
        it('test role', () => {
            expect(employee.getRole()).toEqual('Employee');
        })
    })
}) 
