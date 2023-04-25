import { useEffect, useState } from 'react'

export const useBlog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  })

  return {
    posts,
    setPosts,
  }
}
