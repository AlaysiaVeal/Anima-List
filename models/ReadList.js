const { Schema } = require('mongoose')

const ReadListSchema = new Schema(
  {
    manga_id: { type: Schema.Types.ObjectId, ref: 'MangaList' }
  },
  { timestamps: true }
)
module.exports = ReadListSchema
