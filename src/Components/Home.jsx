import img1 from "../images/MountFuji.jpg"
import img2 from "../images/SydenyOPeraHouse.jpg"
import img3 from "../images/Geirangerfjord.jpg"
import img4 from '../images/DoodhsagarFalls.jpg'
import img5 from '../images/murudeshwaratemple.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
const Home =()=>{
    return(
        <div class="max-w-screen-2xl container mx-auto border-4 shadow-2xl rounded-lg">
            <div class="flex flex-row items-center text-justify pr-10">
                <img src={img1} class="h-64 w-48 m-16 rounded-md" alt="img1"/>
                <div class="border-0">
                <div class="flex flex-row space-x-1 items-center">
                    <FaMapMarkerAlt color="orange"/>
                    <h1>JAPAN</h1>
                    <span class="underline space-x-2">View on Google Maps</span><br />
                </div>
                <h1 class="font-bold text-xl">Mount Fuji</h1>
                <div class="float-end space-y-4">
                    <span>12 Jan, 2021 - 24 Jan, 2021</span><br />
                    <p>
                        Mount Fuji is an active stratovolcano located on the 
                        Japanese island of Honshu, with a summit elevation of 
                        3,776.24 m (12,389 ft 3 in).Mount Fuji is the tallest 
                        mountain in Japan and is known for its graceful conical 
                        form. It is the country's sacred symbol, and temples and
                        shrines are located around and on the volcano.
                        Since the Hoei eruption of 1707, it has remained quiet for 
                        about 300 years. It has been predicted that enormous disasters
                        occurs by its eruption.
                    </p>
                </div>
                </div>
            </div>
            <div class="flex flex-row items-center text-justify pr-10 ">
                <img src={img2} class="h-64 w-48 m-16 rounded-md" alt="img2"/>
                <div class="border-0">
                    <div class="flex flex-row space-x-1 items-center">
                        <FaMapMarkerAlt color="orange"/>
                        <h1>AUSTRALIA</h1>
                        <span class="underline ">View on Google Maps</span>
                    </div>
                    <h1 class="font-bold text-xl">Sydeny Opera House</h1>
                    <div class="float-end space-y-4">
                        <span>27 May, 2021 - 8 Jun, 2021</span>
                        <p>
                            The Sydney Opera House is a multi-venue performing arts
                            centre in Sydney, New South Wales, Australia. Located 
                            on the foreshore of Sydney Harbour, it is widely regarded 
                            as one of the world's most famous and distinctive buildings 
                            and a masterpiece of 20th-century architecture.Designed by 
                            Danish architect Jørn Utzon, but completed by an Australian 
                            architectural team headed by Peter Hall, the building was 
                            formally opened by Queen Elizabeth II on 20 October 1973.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row text-justify items-center pr-10">
                <img src={img3} class="h-64 w-48 m-16 rounded-md" alt ="img3"/>
                <div class="border-0">
                    <div class="flex flex-row space-x-1 items-center">
                        <FaMapMarkerAlt color="orange"/>
                        <h1>NORWAY</h1>
                        <span class="underline ">View on Google Maps</span>
                    </div>
                    <h1 class="font-bold text-xl">Geirangerfjord</h1>
                    <div class="float-end space-y-4">
                        <span>01 Oct, 2021 - 10 Nov, 2021</span>
                        <p>
                        The Geiranger Fjord(Norwegian: Geirangerfjorden) 
                        is a fjord in the Sunnmøre region of Møre og Romsdal 
                        county, Norway. It is located entirely in the Stranda 
                        Municipality. It is a 15-kilometre-long (9+1⁄2 mi) 
                        branch off the Sunnylvsfjorden, which is a branch off 
                        the Storfjorden (Great Fjord). The small village of 
                        Geiranger is located at the end of the fjord where 
                        the Geirangelva river empties into it. 
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row text-justify items-center pr-10">
                <img src={img4} class="h-64 w-48 m-16 rounded-md" alt ="img4"/>
                <div class="border-0">
                    <div class="flex flex-row space-x-1 items-center">
                        <FaMapMarkerAlt color="orange"/>
                        <h1>INDIA</h1>
                        <span class="underline ">View on Google Maps</span>
                    </div>
                    <h1 class="font-bold text-xl">DudhsagarFalls</h1>
                    <div class="float-end space-y-4">
                        <span>05 Oct, 2022 - 10 Nov, 2022</span>
                        <p>
                        Dudhsagar Falls ('Sea of Milk') is a four-tiered 
                        waterfall on the Mandovi River in the Indian state of 
                        Goa. It is 60 km from Panaji by road and is located on 
                        the Belgaum-Vasco Da Gama rail route about 46 km east of 
                        Madgaon and 80 km south of Belgaum. Dudhsagar Falls is 
                        amongst India's tallest waterfalls with a height of 310 m (1017 feet) 
                        and an average width of 30 metres (100 feet).
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row text-justify items-center pr-10">
                <img src={img5} class="h-64 w-48 m-16 rounded-md" alt="img5"/>
                <div class="border-0">
                    <div class="flex flex-row space-x-1 items-center cursor-pointer">
                        <FaMapMarkerAlt color="orange" />
                        <h1>INDIA</h1>
                        <span class="underline ">View on Google Maps</span>
                    </div>
                    <h1 class="font-bold text-xl">Murudeshwar Temple</h1>
                    <div class="float-end space-y-4">
                        <span>05 Jan, 2023 - 10 Jan, 2023</span>
                        <p>
                        Murdeshwar (Murudeshwara) is a town in Uttara 
                        Kannada district in the state of Karnataka, India, It is famous
                        for the world's third tallest Shiva statue, the town lies on 
                        the coast of the Laccadive Sea and is also famous for the 
                        Murudeshwara Temple. The town has a railway station on the 
                        Mangalore–Mumbai Konkan railway route.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;