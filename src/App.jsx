import { useState } from 'react'

import './App.css'

function App() {
  const [img, setimg] = useState(null)
  const [resp, setResp] = useState([])

  const query = `x-api-key: live_Q67ljWtSeWVgzslOjxijmgzednvcmw9VsOgWsc0ps380Zpf4hRzPl8mr91F4Au0n https://api.thedogapi.com/v1/images/search`

  const callAPI = async (query) => {
    const response = await fetch(query);
    setResp(await response.json);

    if (json.url == null) {
      alert("Shit broke, try again")
    }
    else {
      setimg(resp.url);
    }
  };
  

  return (
    <>
      <button onClick={callAPI}>help</button>
      <img src={img} alt='img'></img>
    </>
  )
}

export default App
