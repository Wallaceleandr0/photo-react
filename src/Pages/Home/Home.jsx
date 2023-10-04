import "./Home.css"

function Home() {
  return (
    <div className="home-container">
      <div className="banner"><h2>Seja bem-vindo(a)!!</h2></div>
      <section className="presentation-container">
          <div className="flex-presentation">
            <img src="otavio.jpg"/>
            <div className="text-presentation">
              <h1>HEY I'M OTAVIO SILVA</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iure quaerat ex earum architecto, ducimus voluptatem <br/><br/> quibusdam rerum, voluptates adipisci, praesentium fugit vitae a fugiat nemo sequi quia modi dicta.
              Quam illum temporibus commodi, vitae sapiente voluptates reprehenderit distinctio nemo earum tenetur culpa dicta neque, cum dolore. Fugit voluptas fugiat necessitatibus, a beatae distinctio harum tempora illo laborum veritatis quasi!
              Coe, nesciunt error totam, debitis magni praesentium laborum excepturi voluptatum delectus eligendi possimus animi rerum atque officia sit sequi?</p>
            </div>
          </div>
            <a href="#">Conheça o meu trabalho</a>
      </section>
    <aside className="banner-bottom">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque nesciunt repellendus libero nulla soluta nam impedit eveniet dolorem sit pariatur, incidunt praesentium, nisi earum eius, perferendis voluptas provident cumque magnam.</p>
    </aside>
    </div>
  )
}

export default Home