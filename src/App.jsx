import { useState } from 'react'
import './App.css'
import Carmy from './assets/cap-army.jpg'
import Cjoa from './assets/cap-joaninha.jpg'
import Curs from './assets/cap-ursinho.avif'
import Slider1 from './assets/slider1.jpg'
import Slider2 from './assets/slider2.jpg'
import Slider3 from './assets/slider3.jpg'
import Slider4 from './assets/slider4.jpg'
import Logo from './assets/logo.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Chinelo Nike Victori One Feminino</h2>
              <p className="desc">Da praia à jardinagem ou relaxando no sofá, o Nike Victori One aperfeiçoa um design clássico.</p>
              <p className="preco">R$ 249,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ☆ ☆</span> (2985)</div>
              <div className="off">-15%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Women Nike Dunk Low Susan Fang</h2>
              <p className="desc">O Dunk Low combina seu color block icônico com mistura de materiais e acolchoamento macio para um conforto revolucionário.</p>
              <p className="preco">R$ 1199,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (100)</div>
              <div className="off">-5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Air Jordan 1 Low GS-Peanut Butter Jelly</h2>
              <p className="desc">Adicione um toque de gosma ao seu look com estes Jordans inspirados em gelatina.</p>
              <p className="preco">R$ 999,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (1359)</div>
              <div className="off">-10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/EYB9DnpmBmc?autoplay=1&mute=1&controls=0&loop=1&playlist=EYB9DnpmBmc&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src={Logo} alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
