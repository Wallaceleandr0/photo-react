import "./Fotos.css"

function Fotos() {

  const ensaioInfantil = ["/ensaios/infantil/1.jpg","/ensaios/infantil/2.jpg","/ensaios/infantil/3.jpg","/ensaios/infantil/4.jpg","/ensaios/infantil/5.jpg","/ensaios/infantil/6.jpg","/ensaios/infantil/7.jpg","/ensaios/infantil/8.jpg","/ensaios/infantil/9.jpg"]
  const ensaioExterno = ["/ensaios/externo/1.jpg","/ensaios/externo/2.jpg","/ensaios/externo/3.jpg","/ensaios/externo/4.jpg","/ensaios/externo/5.jpg","/ensaios/externo/6.jpg","/ensaios/externo/7.jpg","/ensaios/externo/8.jpg","/ensaios/externo/9.jpg"]
  const ensaioNoivado = ["/ensaios/noivado/1.jpg","/ensaios/noivado/2.jpg","/ensaios/noivado/3.jpg","/ensaios/noivado/4.jpg","/ensaios/noivado/5.jpg","/ensaios/noivado/6.jpg","/ensaios/noivado/7.jpg","/ensaios/noivado/8.jpg","/ensaios/noivado/9.jpg"]

  return (
    <div className="fotos">
          <h2>Infantil</h2>
        <div className="ensaio">
        {ensaioInfantil.map((img) => (
          <div className="photo-img" style={{backgroundImage: `url(${img})`}}></div>
        ))}
        </div>
          <h2>Externo</h2>
        <div className="ensaio">
        {ensaioExterno.map((img) => (
          <div className="photo-img" style={{backgroundImage: `url(${img})`}}></div>
        ))}
        </div>
          <h2>Noivado</h2>
        <div className="ensaio">
        {ensaioNoivado.map((img) => (
          <div className="photo-img" style={{backgroundImage: `url(${img})`}}></div>
        ))}
        </div>
    </div>
  )
}

export default Fotos