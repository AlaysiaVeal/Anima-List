const { Schema } = require('mongoose')

const ReadListSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    manga_id: { type: Schema.Types.ObjectId, ref: 'manga_id' }
  },
  { timestamps: true }
)
module.exports = ReadListSchema
