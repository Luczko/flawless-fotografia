import React, { useState } from "react";

import "./Experience.css";
import test1 from "../../images/experience/fotografia-kobieca-bialystok-041.jpg";
import test2 from "../../images/experience/fotografia-kobieca-bialystok-042.jpg";
import test3 from "../../images/experience/fotografia-kobieca-bialystok-043.jpg";
import test4 from "../../images/experience/fotografia-kobieca-bialystok-044.jpg";

import { NavLink } from "react-router-dom";

const Experience = () => {
  const [hoverOne, setHoverOne] = useState(false);

  const handleMouseOne = () => {
    setHoverOne((prev) => !prev);
  };
  const [hoverTwo, setHoverTwo] = useState(false);

  const handleMouseTwo = () => {
    setHoverTwo((prev) => !prev);
  };
  const [hoverThree, setHoverThree] = useState(false);

  const handleMouseThree = () => {
    setHoverThree((prev) => !prev);
  };
  const handleResetHover = () => {
    if (hoverOne) {
      setHoverOne(false);
    }
    if (hoverTwo) {
      setHoverTwo(false);
    }
    if (hoverThree) {
      setHoverThree(false);
    }
  };
  const hoverElementOne = hoverOne ? (
    <NavLink to='/carefree-afternoon'>
      <div className='on-hover'>
        <p>
          Sesja kobieca <br /> - Magda
        </p>
      </div>
    </NavLink>
  ) : null;
  const hoverElementTwo = hoverTwo ? (
    <NavLink to='/golden-20s'>
      <div className='on-hover'>
        <p>
          Sesja kobieca <br /> - Angelika
        </p>
      </div>
    </NavLink>
  ) : null;
  const hoverElementThree = hoverThree ? (
    <NavLink to='/be-my-valentine'>
      <div className='on-hover'>
        <p>
          Sesja kobieca <br /> - Karolina
        </p>
      </div>
    </NavLink>
  ) : null;
  return (
    <div className='experience' onClick={handleResetHover}>
      <div className='exp'>
        <img src={test1} alt='sesja kobieca magda makijaż' />
      </div>
      <div className='exp-txt'>
        <h3 id='lush'>Sesja kobieca</h3>
        <p>
          Sesja kobieca to niesamowite doświadczenie, które pozwoli Ci odkryć
          Twoją kobiecość na nowo, sprawi, że poczujesz się wyjątkowo. Nieważne
          czy ma to być prezent dla drugiej połówki, czy prezent dla samej
          siebie... każda sesja jest poświęcona celebracji Twojego piękna i
          siły.
        </p>
      </div>

      <div className='exp-txt'>
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

      <div className='exp-txt-global'>
        <h3> KONSULTACJE</h3>
        <p>
          Sesja jest indywidualnie dopasowywana do każdej klientki. Na spotkaniu
          dokładnie omawiamy Twoją wymarzoną wizję - dobieramy miejsce,
          oświetlenie, stylizacje. Makijaż i fryzura nie są wliczone do pakietu,
          ale jeśli tylko będziesz chciała doradzę Ci usługodawców, z którymi
          najczęściej współpracuje.
        </p>
      </div>
      <div className='exp-photo'>
        <div
          className='exp-hoover'
          onMouseEnter={handleMouseOne}
          onMouseLeave={handleMouseOne}
        >
          <img src={test2} alt='sesja kobieca magda' />
          {hoverElementOne}
        </div>
        <div className='exp-txt-mobile'>
          <h3> KONSULTACJE</h3>
          <p>
            Sesja jest indywidualnie dopasowywana do każdej klientki. Na
            spotkaniu dokładnie omawiamy Twoją wymarzoną wizję - dobieramy
            miejsce, oświetlenie, stylizacje. Makijaż i fryzura nie są wliczone
            do pakietu, ale jeśli tylko będziesz chciała doradzę Ci
            usługodawców, z którymi najczęściej współpracuje.
          </p>
        </div>
        <div className='exp-txt-mobile'>
          <h3>TWOJA SESJA KOBIECA</h3>
          <p>
            Sesja kobieca z Flawless zawsze jest planowana i stylizowana jak
            sesje modowe, każdy szczegół jest dokładnie przemyślany, tak żebyś
            mogła poczuć się jak wyjątkowo i elegancko - jak gwiazda. Wszystko
            jest specjalnie dopasowane do Twojej osoby - różnodne oświetlenie i
            tła, pozy, które podkreślają Twoje atuty, zmiana stylizacji, tak
            żebyś mogła wyciągnąć z tej sesji jak najwięcej. Cały czas i uwagę
            poświęcam tylko Tobie, dopracowujemy każde ujęcia, w spokoju i miłej
            atmosferze. Moim głównym celem, jest to, żebyś poczuła się
            dopieszczona pod każdym względem - żebyś czuła się pięknie, pewnie
            siebie i swobodnie i żebyś ten dzień zapamiętała na długo jako coś
            co umociło Twoją kobiecość.
          </p>
        </div>
        <div
          className='exp-hoover'
          onMouseEnter={handleMouseTwo}
          onMouseLeave={handleMouseTwo}
        >
          <img src={test3} alt='sesja kobieca angelika' />
          {hoverElementTwo}
        </div>
        <div className='exp-txt-mobile'>
          <h3>RETUSZ</h3>
          <p>
            Pakiet zawiera profesjonalny retusz. Każde zdjecie jest starannie
            wyselekcjonowane i poddane autorskiej obróbce. Retusz to tylko
            delikatne pociągnięcia "pędzlem", wydobywam Twoje piękno, retusz
            jest niedostrzegalny. Kreuje tak fotografię, żeby wszystko wyglądało
            naturalnie i podkreślało Twoją wyjątkowość i indywidualność, bo
            jesteś jedyna w swoim rodzaju i to jest piękne.
          </p>
        </div>

        <div className='exp-txt-mobile'>
          <h3>FOTOGRAFIE</h3>
          <p>
            Produktem końcowym są zdjęcia cyfrowe. Oferuję dodatkowo wysokiej
            jakości wydruki na płótnie, wyduki w formie pięknych albumów, tak
            aby jak najlepiej zaprezentować te piękne wspomnienia z Twojej sesji
            kobiecej.
          </p>
        </div>
        <div
          className='exp-hoover'
          onMouseEnter={handleMouseThree}
          onMouseLeave={handleMouseThree}
        >
          <img src={test4} alt='sesja kobieca karolina' />
          {hoverElementThree}
        </div>
      </div>
      <div className='exp-txt-global'>
        <h3>TWOJA SESJA KOBIECA</h3>
        <p>
          Sesja kobieca z Flawless zawsze jest planowana i stylizowana jak sesje
          modowe, każdy szczegół jest dokładnie przemyślany, tak żebyś mogła
          poczuć się jak wyjątkowo i elegancko - jak gwiazda. Wszystko jest
          specjalnie dopasowane do Twojej osoby - różnodne oświetlenie i tła,
          pozy, które podkreślają Twoje atuty, zmiana stylizacji, tak żebyś
          mogła wyciągnąć z tej sesji jak najwięcej. Cały czas i uwagę poświęcam
          tylko Tobie, dopracowujemy każde ujęcia, w spokoju i miłej atmosferze.
          Moim głównym celem, jest to, żebyś poczuła się dopieszczona pod każdym
          względem - żebyś czuła się pięknie, pewnie siebie i swobodnie i żebyś
          ten dzień zapamiętała na długo jako coś co umociło Twoją kobiecość.
        </p>
      </div>

      <div className='exp-txt-global'>
        <h3>RETUSZ</h3>
        <p>
          Pakiet zawiera profesjonalny retusz. Każde zdjecie jest starannie
          wyselekcjonowane i poddane autorskiej obróbce. Retusz to tylko
          delikatne pociągnięcia "pędzlem", wydobywam Twoje piękno, retusz jest
          niedostrzegalny. Kreuje tak fotografię, żeby wszystko wyglądało
          naturalnie i podkreślało Twoją wyjątkowość i indywidualność, bo jesteś
          jedyna w swoim rodzaju i to jest piękne.
        </p>
      </div>

      <div className='exp-txt-global'>
        <h3>FOTOGRAFIE</h3>
        <p>
          Produktem końcowym są zdjęcia cyfrowe. Oferuję dodatkowo wysokiej
          jakości wydruki na płótnie, wyduki w formie pięknych albumów, tak aby
          jak najlepiej zaprezentować te piękne wspomnienia z Twojej sesji
          kobiecej.
        </p>
      </div>
    </div>
  );
};

export default Experience;
