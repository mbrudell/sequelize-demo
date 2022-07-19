import { jest } from '@jest/globals'
// import fetch from 'node-fetch'

import sequelize from '../models/index.js'
// import Member from "../models/member.model.js"
import { create, findAll, findOne, update, deleteMember } from '../controllers/member.controller'

// jest.useFakeTimers()
// beforeAll(() => {
//     // sync db
// })

test('create member', async() => {
    expect.assertions(1)
    const member = create({
        id: 6666,
        names: 'Maiko Ndirash Test',
        idno: '123456789',
        krapin: '987654321',
        mobileno: '0721695979',
        date_registered: '2022-07-17 00:00:00',
        email: 'test@tickos.co.ke',
        gender: 'Male',
        county: 1,
        photo: '',
        idcopy: '',
        krapincopy: '',
        agent: 1
    })

    expect(member.id).toEqual(6666)

})


test('fetch members', async() => {
    findAll({names: 'maiko ndirash'}).then((data) => {
        expect(data.status).toEqual("success");
    });
})


afterAll(async () => {
    await sequelize.close();
});