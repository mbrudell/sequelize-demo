import { jest } from '@jest/globals'
jest.useFakeTimers()

// import sequelize from '../models/index.js'
import { create, findAll } from '../controllers/member.controller'

// test('create member', async() => {
//     expect.assertions(1)
//     const memberObj = {
//         id: 6666,
//         names: 'Maiko Ndirash Test',
//         idno: '123456789',
//         krapin: '987654321',
//         mobileno: '0721695979',
//         date_registered: '2022-07-17 00:00:00',
//         email: 'test@tickos.co.ke',
//         gender: 'Male',
//         county: 1,
//         photo: '',
//         idcopy: '',
//         krapincopy: '',
//         agent: 1
//     }
//     const member = create(memberObj)

//     expect(member.id).toEqual(6666)

// })
  


test('fetch members', async() => {
    findAll().then((data) => {
        expect(data.status).toEqual("success");
    });
})