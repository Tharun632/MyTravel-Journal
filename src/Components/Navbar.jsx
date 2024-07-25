import { FaGlobeAmericas } from "react-icons/fa";
const Navbar =()=>{
    return(
        <div class="max-w-screen-2xl mx-auto container px-4 mt-16 shadow-md rounded-lg bg-orange-400 top-0 left-0 right-0 ">
            <div class="flex items-center h-16">
                <div class="flex mx-auto space-x-2 cursor-pointer">
                <ul class="flex items-center">
                    <li >
                        <FaGlobeAmericas />
                    </li>
                    </ul>
                <h1 class="text-center text-white">My Travel Journal.</h1>
                </div>
            </div>
        </div>
    )
};


export default Navbar;