import express from 'express'
import { fetchModules, fetchCounties } from '../controllers/sys.controller.js'

const router = express.Router()

router.get('/modules', fetchModules)
router.get('/counties', fetchCounties)

export default router