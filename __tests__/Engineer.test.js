const Engineer = require('../lib/engineer');

const engineer = new Engineer('Sol', '9872', 'Sol_Ren@aol.com', 'Solecito20');

describe('Engineer', () => {
    describe('Test Engineer properties', () => {
        it('test the name', () => {
            expect(engineer.name).toEqual('Sol')
        })
        it('test the id', () => {
            expect(engineer.id).toEqual('9872')
        })
        it('test the email', () => {
            expect(engineer.email).toEqual('Sol_Ren@aol.com')
        })
        it('test the github', () => {
            expect(engineer.github).toEqual('Solecito20')
        })
    })
    //Test the methods
    describe('test the methods functions', () => {
        it('test getGithub', () => {
            expect(engineer.getGithub()).toEqual('Solecito20');
        })
        it('test role', () => {
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})