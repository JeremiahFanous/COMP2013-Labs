import './App.css'
import ResortsContainer from './Components/ResortsContainer.tsx'
import listings from './data/data.ts'

function App() {

  return (
    <>
      <h1>Resorts Lite</h1>
      <ResortsContainer listings={listings} />
    </>
  );
}

export default App
