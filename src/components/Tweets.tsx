import { useAppSelector } from '../redux/hooks'
import Tweet from './Tweet'


const Tweets = () => {
    const data = useAppSelector(state => state.data)

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