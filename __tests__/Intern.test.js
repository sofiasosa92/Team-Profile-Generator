const Intern = require('../lib/intern');

const intern = new Intern('Mateo', '2903', 'Angel88@hi.com', 'UTA');

describe('Intern', () => {
    describe('Test Intern properties', () => {
        it('test the name', () => {
            expect(intern.name).toEqual('Mateo')
        })
        it('test the id', () => {
            expect(intern.id).toEqual('2903')
        })
        it('test the email', () => {
            expect(intern.email).toEqual('Angel88@hi.com')
        })
        it('test the school', () => {
            expect(intern.school).toEqual('UTA')
        })
    })
    //Test methods
    describe('test the methods functions', () => {
        it('test getSchool', () => {
            expect(intern.getSchool()).toEqual('UTA');
        })
        it('test getRole', () => {
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})