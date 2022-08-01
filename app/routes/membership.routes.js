import express from "express"
import { fetchMemberships } from '../controllers/membership.controller.js'

const router = express.Router()
router.get('/memberships', fetchMemberships)

export default router