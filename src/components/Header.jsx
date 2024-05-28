
import logo from "../assets/images/TestLogo.png"
import home from "../assets/icons/home.svg"
import people from "../assets/icons/people.svg"
import calender from "../assets/icons/calender.svg"
import message from "../assets/icons/message.svg"
import card from "../assets/icons/card.svg"
import doctor from "../assets/images/doctor.png"
import settings from "../assets/icons/settings.svg"
import dots from "../assets/icons/dots.svg"

function Header() {
  return (
    <div className="bg-white h-[72px] m-auto flex items-center justify-between border border-white rounded-[70px] w-full pl-7 pr-7 cursor-pointer">
        <img src={logo} alt="tech care logo" className="left w-[211px] h-[48px]" />
        <div className="center text-[14px] text-[#072635] font-bold ">
            <ul className="flex items-center justify-between gap-3">
                <li className="flex justify-between gap-2 border p-3 border-white rounded-[41px] hover:bg-custom-bg">
                    <img src={home} alt="home svg" className="" />
                    <p className="">Overview</p>
                </li>
                <li className="flex justify-between gap-2 border p-3 border-white rounded-[41px] bg-[#01F0D0]">
                <img src={people} alt="home svg" className="" />
                    <p className="">Patients</p>
                </li>
                <li className="flex justify-between gap-2 border p-3 border-white rounded-[41px] hover:bg-custom-bg">
                <img src={calender} alt="home svg" className="" />
                    <p className="">Schedule</p>
                </li>
                <li className="flex justify-between gap-2 border p-3 border-white rounded-[41px] hover:bg-custom-bg">
                <img src={message} alt="home svg" className="" />
                    <p className="">Message</p>
                </li>
                <li className="flex justify-between gap-2 border p-3 border-white rounded-[41px] hover:bg-custom-bg">
                <img src={card} alt="home svg" className="" />
                    <p className="">Transactions</p>
                </li>
            </ul>
        </div>
        <div className="right flex justify-between gap-4">
            <div className="flex justify-between gap-2 pr-2 border-r border-[#F6F7F8] ">
                <img src={doctor} alt="" className=""/>
                <div>
                    <p className="text-[14px] text-[#072635] font-bold">Dr Jose Simmons</p>
                    <p className="text-[14px] text-[#707070] font-normal">General Practitioner</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-3">
                <img src={settings} alt="" className=""/>
                <img src={dots} alt="" className=""/>
            </div>
        </div>
    </div>
  )
}

export default Header