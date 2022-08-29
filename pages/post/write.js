import Layout from '../components/Layout'
import { useRef } from 'react'

export default function Write() {
  const idRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()

  const handleSubmit = () => {}
  return (
    <Layout>
      <h1>write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
      </form>
    </Layout>
  )
}
