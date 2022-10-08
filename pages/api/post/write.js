import { format } from 'prettier'
export default async function handler(req, res) {
  const { id, title, content } = req.body
  try {
    await createPost({
      id,
      title,
      date: format(new Date(), 'yyyy-mm-dd'),
      content,
    })
    res.status(200).json({ message: 'create success' })
  } catch (error) {
    res.status(500).json({ message: `create failed ${error}` })
    console.log('id: ', id)
    console.log('title: ', title)
    console.log('title: ', title)
    console.log('title: ', title)
    // console.log('date: ', date)
    console.log('content: ', content)
  }
}
