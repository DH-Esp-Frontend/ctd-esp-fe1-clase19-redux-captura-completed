import { FC } from 'react'
import Tweet from './Tweet'

interface ITweets {
    data: string[]
}

const Tweets = ({data}: ITweets) => {
      return (
    <>
        {data.length 
            ? data.map(tweet => (
                <Tweet content={tweet} />
              ))
            : null
        }
    </>
  )
}

export default Tweets