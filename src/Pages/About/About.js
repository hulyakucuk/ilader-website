import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";
const About = () => {
  return (
    <div className="py-5 mt-3 bg-light ">
      <AboutCard withLink={false} />
      <p className="w-75 mx-auto lh-lg">
        İlim ve İrşad Vakfı , toplumsal ve manevi değerlere sahip çıkma
        misyonuyla 1993 yılında temelleri atılmıştır. Bu anlamlı girişim, saygın
        şahsiyetlerin öncülüğünde gerçekleştirilmiştir. İlim ve İrşad Vakfı'nın
        temelleri, dönemin önde gelen düşünürlerinden merhum Nureddin CAN
        Hocamızın vizyoner yaklaşımı ve saygıdeğer iş insanı Sayın Murat ÜLKER
        Bey'in destekleriyle 1993 yılında atılmıştır. Vakıf, manevi değerleri
        topluma aktarma, ilim ve irşad alanında faaliyetler yürütme amacıyla
        kurulmuştur. İlim ve İrşad Vakfı ve İLADER 22 Ocak 2022 tarihine kadar,
        5 üyeden oluşan bir icra kurulu tarafından yönetilmiştir ve hedeflerine
        ulaşma adına birlikte yol almışlardır. Ancak, belirtilen tarihten
        itibaren, her iki kurumun yürütme görevi ve sorumluluğu, 5 kişilik icra
        kuruluna emanet edilmiştir. Bu yeni dönemde, İlader Vakfı ve İlahiyat
        Araştırmaları Derneği, daha etkin ve verimli bir şekilde topluma hizmet
        sunma yolunda kararlılıkla ilerlemektedir. İlahiyat Araştırmaları
        Derneği, tarihleri boyunca ortaya koydukları özveri ve gayretle, manevi
        değerleri yaşatma, yaygınlaştırma ve gelecek nesillere aktarma misyonunu
        başarıyla sürdürmektedirler. Bu kutsal amaç uğruna gösterdikleri azim ve
        fedakarlık, toplumun manevi zenginliğine katkı sağlamaktadır.
      </p>
    </div>
  );
};

export default About;
