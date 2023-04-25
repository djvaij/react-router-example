import { useBlog } from './useBlog'

export const Blog = () => {
  const { posts } = useBlog()
  return <div>Blog</div>
}
