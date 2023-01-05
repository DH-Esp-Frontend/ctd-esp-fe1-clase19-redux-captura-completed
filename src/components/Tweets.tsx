import { FC } from 'react'

interface IProps{
    data: string[]
}

const Tweets = ({data}: IProps) => {
      return (
    <>
        {data.length 
            ? data.map(tweet => (
                <h2>{tweet}</h2>
              ))
            : <div>Tweets</div>
        }
    </>
  )
}

export default Tweets