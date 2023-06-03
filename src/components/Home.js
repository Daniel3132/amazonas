import React from 'react'
import Carrousel from '../components/Carrousel'
import Opinions from './Opinions'

const Home = () => {

  return (
    <section className='home'>
      <Carrousel categoriaElegida='Electronicos' />
      <Carrousel categoriaElegida='Juegos' />
      <Opinions />
    </section>
  )
}

export default Home