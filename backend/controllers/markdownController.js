import { marked } from 'marked'

const defaultMarkdown = `# Hello from Server

This is a **Markdown Previewer** backend route.
`

export const getMarkdown = (req, res) => {
  res.json({ markdown: defaultMarkdown })
}

export const renderMarkdown = (req, res) => {
  const { markdown } = req.body
  if (!markdown) {
    return res.status(400).json({ error: 'Markdown is required' })
  }
  const html = marked(markdown, { breaks: true })
  res.json({ html })
}
