import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import About from '../../Pages/About';

const AboutCard = ({ withLink }) => {
  return (
    <>

    <Card className=" border-0 py-5 mt-4">
      <Card.Header className='bg-white border-0 '>  
        <h2 className='bg-blue py-3 text-white text-center'>Hakkımızda</h2>
        </Card.Header>
      <Card.Body className='mt-5'>
        {/* <Card.Title>Kurumlar Hakkında Kısa Bilgi</Card.Title> */}
        <Card.Text className='w-75 mx-auto lh-lg'>
        İlahiyat Araştırmaları Derneği (İLADER), ülkemizin yaşadığı 28 Şubat sürecinin ardından manevi ve ilmi değerlerin korunması, yaygınlaştırılması adına büyük bir çabanın ürünü olarak 2007 yılında kurulmuştur. Dernek, eğitim faaliyetlerini resmi bir çerçevede yürütebilmek amacıyla hayata geçirilmiştir. Özellikle iaşe ve ibate hizmetleri Vakıf bünyesinde, eğitim hizmetleri ise Dernek üzerinden yürütülmüştür. Bu iki kıymetli kurum, tarih boyunca birçok insanımızın manevi gelişimine katkıda bulunmuş, ilim ve irşad alanında önemli çalışmalara imza atmıştır.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted bg-white border-0 mx-auto">
     {withLink && <Button variant="secondary " href='/about' to={<About/>}>Daha Fazla</Button>} 
      </Card.Footer>
    </Card>

    </>
  )
}

export default AboutCard
