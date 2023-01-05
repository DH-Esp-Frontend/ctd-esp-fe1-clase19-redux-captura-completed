import { useState } from 'react'
import Tweets from './components/Tweets'
import Avatar from './components/Avatar'

function App() {
  const [text, setText] = useState<string>("")
  const [tweets, setTweets] = useState<string[]>([])

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault()
      setTweets([...tweets, text])
      setText("")
  }


  return (
    <div className="App">
      <div className='form'>
        <Avatar/>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={text} type="text" placeholder='¿En qué estas pensando?'/>
          <button type='submit'>Agregar</button>
        </form>
      </div>
      <Tweets data={tweets} />
    </div>
  )
}

export default App
