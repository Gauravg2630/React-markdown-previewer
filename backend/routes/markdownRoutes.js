import express from 'express'
import { getMarkdown, renderMarkdown } from '../controllers/markdownController.js'

const router = express.Router()

router.get('/', getMarkdown)
router.post('/render', renderMarkdown)

export default router
