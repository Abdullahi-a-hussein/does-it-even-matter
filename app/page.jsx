import Image from 'next/image'
import Heading from '../components/heading'
import Hero from '../components/introduction'
import LastestBlog from '../components/latestBlog'
import Posts from '../components/previousPosts'
import { prevPosts } from '../constants/constants'
import { getSortedPostData } from '../lib/postExtraction'

export default function Home() {
  const posts = getSortedPostData()
  const currPost = posts.map((post, key) => {
    return {
      ...post,
      tags: post.tags.split(", "),
      id: key < 10? "0" + 1: key + 1
    }
  })
console.log(currPost)
    
  return (
    <main>
      <section>
        <Heading />
      </section>
      <section>
        <Hero />
      </section>
      <section>
      <LastestBlog />
      </section>
      <section>
        <Posts posts={currPost}/>
      </section>
    </main>
  )
}
