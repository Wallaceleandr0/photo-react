import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h2>otavio<span id="orange">souza</span></h2>
        <p>Recordando momentos únicos através da fotografia</p>
        <Link id="a-button" to="/fotos">Conheça o meu trabalho</Link>
      </div>
      <section id="about" className="presentation-container">
          <div className="flex-presentation">
            <div className="bg-otavio"></div>
            <div className="text-presentation">
              <h1>SOBRE MIM</h1>
              <p>Olá! Meu nome é Otavio Souza, tenho 30 anos e sou um fotógrafo apaixonado pelo que faço. Desde então, recebi todo o apoio de amigos e familiares para seguir essa carreira. Hoje, sei que não trabalho apenas com fotografias, mas com histórias, memórias, emoções e sentimentos, que procuro retratar através das lentes. Dessa forma, conto a vida de forma mais emocionante.<br></br>Ser fotógrafo é um prazer e uma responsabilidade. Pois a fotografia é muito mais que um registro, ela tem o poder de eternizar emoções, ela é uma máquina do tempo que pode nos levar de volta aos momentos mais mágicos de nossas vidas. Desse modo, Mais do que um registro fotográfico meu objetivo é criar memórias que irão travessar gerações na sua família.</p>
            </div>
          </div>
          <Link id="a-button" to="/fotos">Conheça o meu trabalho</Link>
      </section>
    <aside className="banner-bottom">
      <p>"Capturar a beleza de um momento é a magia da fotografia, onde o instante se eterniza e a história se conta sem palavras."</p>
    </aside>
    </div>
  )
}

export default Home