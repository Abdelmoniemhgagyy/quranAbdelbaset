import Logo from "../../assets/logo.png"
import { Link, useNavigate } from "react-router-dom"
function MainPage() {
  const navgite = useNavigate()
  return (
    <div className="h-screen bg-[#1e688d] text-white flex flex-col justify-center text-center" >
      <div className="mb-[10px] mx-auto hover:scale-[1.09] duration-300" onClick={()=> navgite("/quran")}>
      <img src={Logo} alt="logo" className=" rounded-[40px] w-[200px] h-[200px] md:w-[250px] md:h-[250px] " />
      </div>
            <div className="mx-auto"> 
                {/* <h1 className="text-xl  font-semibold">القارئ أحمد دبيان </h1> */}
            </div>

            {/* <div className="mt-[15px] flex items-center  justify-center space-x-2"> */}
                 {/* <Link to="/quran" className=" p-2 text-white rounded-[10px] min-w-[60px] absolute h-screen w-screen zindex-[99999] top-0 left-0 "></Link> */}
                {/* <Link to="/quran" className="bg-green-500 p-2 text-white rounded-[10px] min-w-[60px]">ترتيل</Link>
                <Link to="/quran" className="bg-green-500 p-2 text-white rounded-[10px] min-w-[60px]">تحويد</Link> */}
            {/* </div> */}
    </div>
  )
}

export default MainPage