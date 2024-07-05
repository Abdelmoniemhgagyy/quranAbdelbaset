import  { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import namesOfsura from "../../data/quran"
import 'react-h5-audio-player/lib/styles.css';
import "./styles.css"
function Player1() {
  const [num, setNum]= useState(1);
  const numUrl =  num < 10 ? "00" :  num < 100  ? "0" : ""


 const url =`https://ia601808.us.archive.org/18/items/002_20210119_202101zzzzz/${numUrl}${num}.mp3`
 const[mainColor,setMainColor]=useState("#333")

  return (
<div className=' mt-2 mb-[100px] '>
{/* namesOfsura */}
      {namesOfsura.map((item,index)=>(
      <div className='rounded-[10px]' 
           style={{backgroundColor:mainColor}} 
           onClick={()=>setNum(`${item.id}`)} key={index}> 
              <p className='text-center text-white p-2 border-bottom cursor-pointer m-1  '>{item.name}</p>
      
      </div>
      ))}
       {/* audio bar  */}
      <div className='fixed bottom-0 left-0 w-screen'>
          <AudioPlayer
                className='bg-black'
            style={{direction:"ltr"}}
              autoPlay
              src={url}
              onPlay={e => console.log("onPlay")}
            />

        </div>


{/* change background color  */}
      <nav className='fixed bottom-[95px] left-1  md:left-4'>
                <div className='flex  bg-blue-900 p-2 rounded-full text-2xl '>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("#333")}>
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#333] rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#c344ed")} >
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#c344ed] rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#fca5a5")} >
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-red-300 rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("#53f13491")}>
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-green-300 rounded-full"></p>
                </div>
                
                </div>
      </nav>
    </div>
  )
}

export default Player1