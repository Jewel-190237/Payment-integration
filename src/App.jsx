import Billing from "./Components/Billing";
import Business from "./Components/Business";
import CardDeal from "./Components/CardDeal";
import Clients from "./Components/Clients";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import States from "./Components/States";
import Testimonials from "./Components/Testimonials";
import styles from "./style";
const App = () => {
  return (
    <div className='bg-slate-900 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-slate-900 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero> </Hero>
        </div>
      </div>

      <div className={`bg-slate-900 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <States></States>
          <Business> </Business>
          <Billing> </Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;