import { IPost } from '@/types/posts'

export const PostsList = (data: IPost[]) => {
  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>
      })}
    </div>
  )
}
