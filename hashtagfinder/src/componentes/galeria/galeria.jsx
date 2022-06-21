import React from 'react';

/* Importação das bibliotecas padrões do SwiperJS */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

/* Estilização personalizda para o SwiperJS */
import './galeria.css';
import Twitter from '../twitter/twitter';

export default function Galeria() {
  return (
    <section className='container galeria'>
      <div className='container-descricao-galeria'>
        <p className='descricao-galeria-texto'>Exibindo os 10 resultados mais recentes para #natureza</p>
      </div>

      <div className='container-galeria'>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className='mySwiper'>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-10.jpg' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.w3schools.com/css/img_5terre.jpg' alt='' />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Componente em que mostram os últimos 10 twitters */}
      <Twitter />
    </section>
  );
}
