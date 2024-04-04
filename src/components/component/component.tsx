/* eslint-disable react/no-unescaped-entities */ 

'use client';
import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import CopyToClipboard from "../CopyToClipboard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faLinkedin, faYoutube, faSquareThreads } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
import { faMapLocationDot, faHeadset, faMoneyCheckDollar, faLocationDot, faStar,faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Or a regular credit card icon


export function Component() {
  const iban = 'DE89 3704 0044 0532 0130 00';
  const ad = 'Akın Teoman Yabaneri';
  const handleClick = () => {
    window.location.href = "https://maps.app.goo.gl/3Nj8WQYLwQbA3MVJ9"; // Replace with your link
};
const handleClick2 = () => {
  window.location.href = "https://www.ebvho.org.tr/dokumanlar/ev_sus_2024tarife.jpg"; // Replace with your link
};

  return (
    <div key="1" className="min-h-screen bg-[#6C201E] dark:bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-red-200 via-orange-200 to-yellow-200 dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md mx-auto mr-3 ml-3 mt-3 mb-3">
        <div className="flex flex-col items-center mb-4">
          <img
            alt="Business Logo"
            className="rounded-full"
            height="100"
            src="logo.png"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          
          <h2 className="mt-2 text-xl font-semibold text-[#78350f]">Espati Veteriner Kliniği</h2>
          <p className="mt-1 text-sm text-green-600 dark:text-gray-400 text-bold">7/24 Açık</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 text-center">
            Uzman ekibimiz her zaman yanınızda ve artık bütün platformlarda!
          </p>
        </div>
        <div className="flex flex-col items-center mb-4">
        <FontAwesomeIcon icon={faMapLocationDot} className="h-7 w-8 text-green-500 hover:text-green-600" /> 
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer text-center" onClick={handleClick}>Şirintepe Mah. Paşasoylu Sk. No:11/B Tepebaşı/Eskişehir</p>
        </div>
          <div className="flex flex-col items-center mb-4">
            <FontAwesomeIcon icon={faMoneyCheckDollar} className="h-7 w-8 text-green-500 hover:text-green-600" /> 
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer text-vertical text-center">
            <p className="hover:text-green-600">IBAN: {iban} <CopyToClipboard  text={iban} /></p>
              <p className="hover:text-green-600">{ad} <CopyToClipboard  text={ad} /></p>
              <p>Yapı Kredi Bankası</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mb-4">
    {/* Phone */}
    <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHeadset} className="h-7 w-8 text-green-500 hover:text-green-600" />
        <a href="tel:05431569526" className="mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">
            0543 156 95 26
        </a>
    </div>

    {/* Email */}
    <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faEnvelope} className="h-7 w-8 text-green-500 hover:text-green-600" />
        <a href="mailto:info@espativet.com" className="mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500">
        info@espativet        </a>
    </div>
</div>
        <div className="flex flex-row items-center justify-center mb-4 space-x-4">
          <Link href="https://twitter.com/espativet" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} className="h-8 w-8 text-blue-400 hover:text-blue-600" />
          </Link>
          <Link href="https://www.instagram.com/espativet/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8 text-pink-500 hover:text-pink-700" /> 
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61552590453623" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="h-8 w-7 text-blue-600 hover:text-blue-800" />
          </Link>

          <Link href="https://www.linkedin.com/company/101379755/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-blue-500 hover:text-blue-700" />
          </Link>

          <Link href="https://youtube.com/@espati6342?si=srI5zXC7LS179_h6" target="_blank">
                  <FontAwesomeIcon icon={faYoutube} className="h-8 w-8 text-red-600 hover:text-red-800" />
          </Link>

          <Link href="https://www.threads.net/@espativet" target="_blank">
                  <FontAwesomeIcon icon={faSquareThreads} className="h-8 w-8 text-orange-500 hover:text-orange-700" /> 
          </Link>
          <Link href="https://maps.app.goo.gl/3Nj8WQYLwQbA3MVJ9#" target="_blank">
                  <FontAwesomeIcon icon={faLocationDot} className="h-7 w-6 text-[#4a80f5] hover:text-[#9bbff4]" /> 
          </Link>
        </div>
        <div className="flex flex-col items-start mb-4 w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"> 
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">    <FontAwesomeIcon icon={faStar} className="h-5 w-6 text-yellow-400 mr-1" /> 
Google'dan bizi değerlendirmeyi unutmayın!</h3> 
    <p className="text-gray-700 dark:text-gray-300">Görüşleriniz hizmetlerimizi şekillendiriyor.</p>
</div>
        <div className="flex flex-row items-center justify-between w-full">
        <Button className="w-full h-12 bg-green-600 hover:bg-green-700 ml-2" onClick={handleClick2}>Değerlendir!</Button>
        <Button className="w-full h-12 bg-[#6C201E] hover:bg-[#5a1916] ml-2" onClick={handleClick2}>Fiyat Listesi</Button>

        </div>
      </div>
    </div>
  )
}



export default Component;