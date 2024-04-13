import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "../custom.css";
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import AgentCard from "./AgentCard";
import { NavLink } from "react-router-dom";

const Agents = () => {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch("./FakeAgents.json")
            .then(response => response.json())
            .then(data => setAgents(data))
    }, [])
    return (
        <div className="sliders mt-10 lg:mt-28">
            <div>
                <h1 className="font-bebas text-5xl lg:text-6xl text-center mb-3 lg:mb-8">Meet Our Agents</h1>
                <p className="font-mont text-lg mt-4 mb-10 font-semibold text-center w-4/5 lg:w-3/5 mx-auto">
                    Meet our dedicated team of hospitality real estate agents,
                    each passionate about delivering exceptional service.</p>
            </div>
            <Swiper             
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                      },
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="swiper-container"
            >
                {
                    agents.map(agent => <SwiperSlide key={agent.id} className="mb-10">
                        <AgentCard key={agent.id} agent={agent}></AgentCard>
                    </SwiperSlide>)
                }
            </Swiper>
            <NavLink to={`/agents`} className="btn mt-4 text-lg text-white w-64 mx-auto flex flex-col   
            border-2 border-deep-purple bg-deep-purple 
                hover:border-deep-purple hover:bg-transparent hover:text-deep-purple">
                View All Agents</NavLink>
        </div >

    );
};

export default Agents;