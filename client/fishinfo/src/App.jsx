import { useEffect, useState } from 'react'
import './App.css'
import Fish from './components/Fish'

const App = () => {
const [fishData, setFishData] = useState([])

useEffect(() => {
  const fetchFish = async () => {
    try {
      const response = await fetch('/api/fish');
      if(response.ok){
        const data = await response.json();
        setFishData(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchFish();
}, [])

   return (
    <>
      <div className="container mx-auto p-8">
        <div className=" xl:grid-cols-4 gap-4">
          {fishData.map((fish) => (
            <Fish key={fish.id} fishData={fish} />
          ))}
        </div>
      </div>
    </>
  );
};


export default App
