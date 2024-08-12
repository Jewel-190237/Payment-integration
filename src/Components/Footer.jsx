import { logo } from "../assets";
import f from '../assets/image/Vector (1).png'
import l from '../assets/image/Group.png'
import t from '../assets/image/Group (1).png'
const Footer = () => {
    return (
        <section className="">
            <div className="flex flex-col md:flex-row sm:justify-center gap-16">
                <div className="w-full md:w-1/3">
                    <img src={logo} alt="" />
                    <p className="mt-8 text-white">A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className="flex flex-wrap md:flex-row w-full md:w-2/3 lg:w-[60%] justify-center lg:justify-between gap-4 mt-1 md:mt-2 ">
                    <div>
                        <h3 className="text-xl text-white">UseFull Links</h3>
                        <div className="flex flex-col gap-1 mt-4 justify-center text-white">
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl text-white">UseFull Links</h3>
                        <div className="flex flex-col gap-1 mt-4 justify-center text-white">
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl text-white">UseFull Links</h3>
                        <div className="flex flex-col gap-1 mt-4 justify-center text-white">
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                            <a href="">Content</a>
                        </div>
                    </div>

                </div>

            </div>
            <div className="w-full h-[2px] bg-white mt-3">
                <br />
            </div>
            {/* copy right part */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-between  mt-3 mb-4">
                <div className="text-white flex justify-center md:justify-start">
                    Copyright 2024 HooBank. All Rights Reserved.
                </div>
                <div className="flex gap-8 pr-3 justify-center mt-2 lg:mt-1">
                    <img src={f} alt="" />
                    <img src={l} alt="" />
                    <img src={t} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Footer;