import React from 'react'
import "./Trends.css"

const Trends = () => {
  const movies =[
    {
      "id": "𝟏",
      "url":"https://i.pinimg.com/736x/e2/4c/a2/e24ca24561211a756f9808480e4c2686.jpg"
    },
      {
      "id":2,
      "url":"https://i.pinimg.com/736x/21/ff/37/21ff37caf9f2ef67cf3904b19a6de776.jpg"
    },
      {
      "id":3,
      "url":"https://i.pinimg.com/736x/8b/da/c3/8bdac3ecfbc8af2e7f28505ae00caba3.jpg"
    },
      {
      "id":4,
      "url":"https://i.pinimg.com/1200x/52/07/42/52074251469512554c8bf8fe4488fec9.jpg"
    },
      {
      "id":5,
      "url":"https://i.pinimg.com/736x/8c/6e/53/8c6e530be67a0cdd51feabb178e5c8f2.jpg"
    },
      {
      "id":6,
      "url":"https://i.pinimg.com/736x/74/ee/19/74ee1947ce13ba054dd4dff6ef62f2a4.jpg"
    },
      {
      "id":7,
      "url":"https://i.pinimg.com/736x/cb/13/da/cb13daa8ca1854a6b845a271b4be488d.jpg"
    },
      {
      "id":8,
      "url":"https://i.pinimg.com/736x/05/f5/3a/05f53ac2b481420bb5941b058ee54841.jpg"
    },
      {
      "id":9,
      "url":"https://i.pinimg.com/1200x/e2/bf/2e/e2bf2e80a043c8e82b415a2101f7058b.jpg"
    },
      {
      "id":10,
      "url":"https://i.pinimg.com/1200x/0d/60/a4/0d60a4fd4bcd9d2a3d9e9cc9602e4189.jpg"
    },
  ]
  return (
    <div className='trends'>
        <div className="flex justify-between">
          <h2 className='font-bold'>
            Trending Now
          </h2>
            <h5>
              More
            </h5>
        </div>
        <div className="flex items-end gap-10 overflow-x-scroll overflow-y-hidden hide-scrollbar px-6">
          {movies.map((movie,index)=>{
          return(
               <div key={index}className="pt-3 h-[370px] relative flex-shrink-0">
            <img 
            src={movie.url} 
            alt={`Trending movie ${movie.id}`}
            className='w-[240px] h-[330px] object-cover rounded-4xl' />
            <div className=" Number text-9xl font-bold absolute bottom-[10px] left-[-10px] text-stroke-white">{movie.id}</div>
        </div>
          )
        })}
        </div>
    </div>
  )
}

export default Trends