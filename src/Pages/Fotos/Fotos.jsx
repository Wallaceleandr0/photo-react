import "./Fotos.css"

function Fotos() {

  const ensaioInfantil = ["/ensaios/infantil/photo1.jpg","/ensaios/infantil/photo2.jpg","/ensaios/infantil/photo3.jpg","/ensaios/infantil/photo4.jpg","/ensaios/infantil/photo5.jpg","/ensaios/infantil/photo6.jpg","/ensaios/infantil/photo7.jpg","/ensaios/infantil/photo8.jpg","/ensaios/infantil/photo9.jpg","/ensaios/infantil/photo10.jpg","/ensaios/infantil/photo11.jpg","/ensaios/infantil/photo12.jpg"]
  const ensaioExterno = ["/ensaios/externo/photo1.jpg","/ensaios/externo/photo2.jpg","/ensaios/externo/photo3.jpg","/ensaios/externo/photo4.jpg","/ensaios/externo/photo5.jpg","/ensaios/externo/photo6.jpg","/ensaios/externo/photo7.jpg","/ensaios/externo/photo8.jpg","/ensaios/externo/photo9.jpg"]
  const ensaioNoivado = ["/ensaios/noivado/photo1.jpg","/ensaios/noivado/photo2.jpg","/ensaios/noivado/photo3.jpg","/ensaios/noivado/photo4.jpg","/ensaios/noivado/photo5.jpg","/ensaios/noivado/photo6.jpg","/ensaios/noivado/photo7.jpg","/ensaios/noivado/photo8.jpg","/ensaios/noivado/photo9.jpg"]

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