import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
function MainPage() {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center text-center" >
      <div className="mb-[10px] mx-auto">
      <img src={Logo} alt="logo" className="rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] " />
      </div>
            <div className="mx-auto"> 
                <h1 className="text-xl  font-semibold">الشيخ عبدالباسط عبدالصمد</h1>
            </div>

            <div className="mt-[15px] flex items-center  justify-center space-x-2">
                 <Link to="/quran" className="bg-green-500 p-2 text-white rounded-[10px] min-w-[60px]">بسم الله</Link>
                {/* <Link to="/quran" className="bg-green-500 p-2 text-white rounded-[10px] min-w-[60px]">ترتيل</Link>
                <Link to="/quran" className="bg-green-500 p-2 text-white rounded-[10px] min-w-[60px]">تحويد</Link> */}
            </div>
    </div>
  )
}

export default MainPage