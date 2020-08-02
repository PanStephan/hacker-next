import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/StoryList'
import Link from 'next/link'

const Index = ({ stories, page }) => {

  if (stories.length === 0) return <Error statusCode={503}/>

  return (
    <div>
      <div>Hacker next</div>
      <StoryList stories={stories}/> 
      <footer>
        <Link href={`/?page=${page+1}`}>
          <a>Next Page {page+1}</a>
        </Link>
      </footer>
    </div>
  )
}

export async function getServerSideProps({ req, res, query }) {
  let stories
  let page 
  try {
    page = Number(query.page) || 1
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`)
    stories = await res.json()
  } catch(e) { 
    console.log(e) 
    stories = []
  }
  return {
    props: {
      stories,
      page
    }
  }
}


export default Index