import "./Fotos.css"

function Fotos() {

  const img = ["https://images.pexels.com/photos/5626120/pexels-photo-5626120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15326931/pexels-photo-15326931/free-photo-of-aplicando-solicitando-praticando-labios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/13698094/pexels-photo-13698094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/14241327/pexels-photo-14241327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/5595697/pexels-photo-5595697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/14241328/pexels-photo-14241328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15103764/pexels-photo-15103764/free-photo-of-feliz-alegre-contente-pessoa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15174479/pexels-photo-15174479/free-photo-of-bebida-de-cafe-drink-de-cafe-cafeteria-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/14448028/pexels-photo-14448028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15274682/pexels-photo-15274682/free-photo-of-profundidade-de-campo-retrato-bonita-elegante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15274701/pexels-photo-15274701/free-photo-of-sofa-menina-garota-moca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15340634/pexels-photo-15340634/free-photo-of-pessoa-mulher-mulher-jovem-moca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

  return (
    <div className="fotos">
        {img.map((img, index) => (
          <img key={index} src={img} alt="Foto"/>
        ))}
    </div>
  )
}

export default Fotos