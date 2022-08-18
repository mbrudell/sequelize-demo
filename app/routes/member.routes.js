import express from "express"
import { create, findAll, findOne, update, deleteMember } from '../controllers/member.controller.js'

const router = express.Router()

router.post('/addMember', create)
router.get('/', findAll)
router.get('/:id', findOne)
router.put('/:id', update)
router.delete('/:id', deleteMember)

export default router