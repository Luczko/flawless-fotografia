import React from "react";

import pic1 from "../../images/about/fotografia-kobieca-bialystok-031.jpg";
import pic2 from "../../images/about/fotografia-kobieca-bialystok-032.jpg";
import pic3 from "../../images/about/fotografia-kobieca-bialystok-033.jpg";
import pic4 from "../../images/about/fotografia-kobieca-bialystok-034.jpg";

import "./About.css";

const About = () => {
  return (
    <div className='about'>
      <div className='abt'>
        <img src={pic1} alt='fotograf ewelina sadowska' />
      </div>
      <div className='abt-txt'>
        <h3 id='lush'>O mnie</h3>
        <p>
          Kobiecość - szukanie jej aspektów, przejawów, obrazów zawsze mi
          towarzyszyło. Od tego też zaczęła się moja fotograficzna przygoda.
          Pokazywanie poprzez zdjęcia siły jaką jest kobiecość. Autentyczność,
          elegancja i ponadczasowa klasyka - to to czym się kieruje tworząc dla
          Ciebie te wyjątkowe obrazy.
        </p>
      </div>

      <div className='abt-txt'>
        <h3>KOBIETY FLAWLESS</h3>
        <p>
          Usłyszeć, że ta sesja wydobyła to, co "było głęboko ukryte" to
          spełnienie każdego fotografa. Pracujemy, wychowujemy dzieci,
          opiekujemy się domem, chodzimy na zajęcia dodatkowe... i w tym całym
          zabieganiu zapominamy o sobie. Warto się zatrzymać raz na jakiś czas i
          dać sobie oddech. Na sesjach kobiecyh łapiemy mnóstwo oddechów. Ten
          dzień jest cały dla Ciebie, sprawiam, że czujesz się doceniona,
          dopieszczona i rozluźniona. Dzięki temu w efekcie końcowym,
          dostrzegasz kobietę, która zawsze tam była, a o której zapomniałaś.
        </p>
      </div>

      <div className='abt-txt'>
        <h3>PO DRUGIEJ STRONIE OBIEKTYWU</h3>
        <p>
          Zainspirowana kobiecymi portretami, szukając sposobu jak mogłabym
          jeszcze lepiej doradzać Wam podczas sesji, sama zdecydowałam się wziąć
          w nich kilkakrotnie udział - po drugiej stronie obiektywu. Dzięki temu
          wiem, jak Ci najlepiej doradzić podczas pozowania, jak wydobyć Twoje
          piękne kształty i atuty. I mówiąc z własnego doświadczenia - każda
          kobietka powinna sobie pozowlić na chwilę takiego relaksu, na te
          piękne portrety, bo ja wracam do nich często i zawsze dodają mi one
          pewności siebie. Każda z nas może wyglądać i poczuć się jak gwiazda.
          Zapraszam Cię na wspólną niezapomnianą przygodę - małe ostrzeżenie -
          to uzaleźnia!
        </p>
      </div>
      <div className='abt-photo'>
        <img src={pic2} alt='fotograf ewelina sadowska' />
        <img src={pic3} alt='fotograf ewelina sadowska' />
        <img src={pic4} alt='fotograf ewelina sadowska' />
      </div>
    </div>
  );
};

export default About;
