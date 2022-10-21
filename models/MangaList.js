const { Schema } = require('mongoose')

const MangaListSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = MangaListSchema
