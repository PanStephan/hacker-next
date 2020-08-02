import Link from 'next/Link'

const StoryList = ({ stories }) => (
  <ul>
    { stories.map(el => {
      return (
        <li key={el.id}>
          <Link href={`/story?id=${el.id}`}>
            <a>{ el.title }</a>
          </Link>
          <div>{ el.time_ago }</div>
        </li>
      )
    }) }
  </ul>
)

export default StoryList