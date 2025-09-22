  import React from "react";
    import Logo from "../assets/img/Snapp.webp"

    function Navbar (){
        return(
            <nav className="sticky top-0 flex flex-row justify-items-end items-center bg-white px-10 mr-36">
                <div className="w-40 h-20">
                   <img src={Logo} alt="لوگو" className="w-full h-full object-cover"/>
                </div>
                <div>
                    <ul className="flex flex-row-reverse gap-9 items-center py-4 my-4 mr-7">
                        <li><a href="">سوپراپ اسنپ</a></li>
                        <li><a href="">ثبت نام راننده اسنپ</a></li>
                        <li><a href=""> باشگاه رانندگان </a></li>
                        <li><a href=""> پنل سازمانی </a></li>
                        <li><a href=""> بلاگ </a></li>
                        <li><a href=""> درباره اسنپ </a></li>
                    </ul>
                </div>
            </nav>
        )
    }
    export default Navbar;