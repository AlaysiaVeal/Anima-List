const Manga = require('../models/MangaList')

const createManga = async (req, res) => {
  try {
    const manga = await new Manga(req.body)
    await manga.save()
    return res.status(201).json({
      manga
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createManga
}
