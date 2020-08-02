import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import Layout from '../components/Layout'

const Story = ({ news }) => {
  if(!news) return <Error statusCode='503'/>
  
  return (
    <Layout backButton={true}>
      <span>Smth</span>
      <ul>
        { 
          <li>
            <strong>{ news.title }</strong>
            <div> { news.id } </div>
          </li>
        }
      </ul>
      <ul>
        { news.comments.length > 0 ? 
            ( news.comments.map(el => {
              return (
                <li key={el.id}>
                {el.content}
              </li>
            )}) )
            :
            0
        } 
      </ul>
    </Layout>
  )
}

export async function getServerSideProps({ req, res, query }) {
  const storyId = query.id
  let news
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    news = await res.json()
  } catch(e) {
    console.log(e)
    news = false
  }
  return {
    props: {
      news
    }
  } 
}

export default Story