import React from "react";

import test1 from "../../images/about/test1.jpg";
import test2 from "../../images/about/test2.jpg";
import test3 from "../../images/about/test3.jpg";
import test4 from "../../images/about/test4.jpg";

import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <div className='abt'>
        <img src={test1} alt='gal3' />
      </div>
      <div className='abt-txt'>
        <h3 id='lush'>O mnie</h3>
        <p>
          Sesja kobieca to niesamowite doświadczenie, które pozwoli Ci odkryć
          Twoją kobiecość na nowo, sprawi, że poczujesz się wyjątkowo. Nieważne
          czy ma to być prezent dla drugiej połówki, czy prezent dla samej
          siebie... każda sesja jest poświęcona celebracji Twojego piękna i
          siły.
        </p>
      </div>

      <div className='abt-txt'>
        <h3>FLAWLESS</h3>
        <p>
          Flawless powstało z myślą o każdej kobiecie i pokazywaniu wszystkich
          aspektów kobiecości, bo dla każdej z nas może to oznaczać zupełnie co
          innego. to przestrzeń, w której możesz się odważyć na to o czym zawsze
          marzyłaś... Każda z nas nosi w sobie wizję idealnej kobiety... takiej
          którą chciałybyśmy być, ale codzienne obowiązki, odkładanie samej
          siebie i swoich pragnień na później przyćmiewa nam to każdego dnia.
          Sesja kobieca to czas tylko dla samej siebie, na chwilę relaksu, na
          spełnienie Twoich pragnień.
        </p>
      </div>

      <div className='abt-txt'>
        <h3> KONSULTACJE</h3>
        <p>
          Sesja jest indywidualnie dopasowywana do każdej klientki. Na spotkaniu
          dokładnie omawiamy Twoją wymarzoną wizję - dobieramy miejsce,
          oświetlenie, stylizacje. Makijaż i fryzura nie są wliczone do pakietu,
          ale jeśli tylko będziesz chciała doradzę Ci usługodawców, z którymi
          najczęściej współpracuje.
        </p>
      </div>
      <div className='abt-photo'>
        <img src={test2} alt='gal3' />
        <img src={test3} alt='gal3' />
        <img src={test4} alt='gal3' />
      </div>
    </div>
  );
};

export default About;
