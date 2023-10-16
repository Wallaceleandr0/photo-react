import "./Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h2>otavio<span id="orange">souza</span></h2>
        <p>Recordando momentos únicos através da fotografia</p>
        <a href="https://wa.me/5521994319001?text=Olá,%20tenho%20interesse%20em%20seu%20serviço%20de%20fotografia.%20Podemos%20conversar%20sobre%20os%20detalhes?" id="a-button" target="_blank">Conheça o meu trabalho</a>
      </div>
      <section id="about" className="presentation-container">
          <div className="flex-presentation">
            <div className="bg-otavio"></div>
            <div className="text-presentation">
              <h1>HEY I'M OTAVIO SILVA</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure quaerat ex earum architecto, ducimus voluptatem <br/><br/> quibusdam rerum, voluptates adipisci, praesentium fugit vitae a fugiat nemo sequi quia modi dicta.
              Quam illum temporibus commodi, vitae sapiente voluptates reprehenderit distinctio nemo earum tenetur culpa dicta neque, cum dolore. Fugit voluptas fugiat necessitatibus, a beatae distinctio harum tempora illo laborum veritatis quasi!
              Coe, nesciunt error totam, debitis magni praesentium laborum excepturi voluptatum delectus eligendi possimus animi rerum atque officia sit sequi?</p>
            </div>
          </div>
            <a href="https://wa.me/5521994319001?text=Olá,%20tenho%20interesse%20em%20seu%20serviço%20de%20fotografia.%20Podemos%20conversar%20sobre%20os%20detalhes?" target="_blank" id="a-button">Conheça o meu trabalho</a>
      </section>
    <aside className="banner-bottom">
      <p>"Capturar a beleza de um momento é a magia da fotografia, onde o instante se eterniza e a história se conta sem palavras."</p>
    </aside>
    </div>
  )
}

export default Home