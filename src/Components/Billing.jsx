import { apple, bill, google } from "../assets";
import styles from "../style";
const Billing = () => {
    return (
        <section id="billing" className="flex flex-col-reverse md:flex-row gap-28 items-center justify-center ">
            <div className="flex-1">
                <img src={bill} alt="" />
            </div>
            <div className="flex-1 justify-center"> 
                <h1 className={`${styles.heading2} text-white leading-[66.8px]`}>Easily Control your billing information</h1>
                <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aliquid neque, incidunt blanditiis voluptas temporibus nulla labore facilis tempora, magni quasi.</p>
                <div className="flex gap-8 justify-start items-center mt-10">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>
            </div>
             
        </section>
    );
};

export default Billing;