import express from "express"
import { create, findAll, findOne, update } from '../controllers/member.controller.js'

const router = express.Router()

router.post('/', create)
router.get('/', findAll)
router.get('/:id', findOne)
router.put('/:id', update)
// router.delete('/:id', delete)

export default router