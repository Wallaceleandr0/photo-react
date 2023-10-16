import "./Fotos.css"

function Fotos() {

  const img = ["/ensaios/photo1.jpg","/ensaios/photo2.jpg","/ensaios/photo3.jpg","/ensaios/photo4.jpg","/ensaios/photo5.jpg","/ensaios/photo6.jpg","/ensaios/photo7.jpg","/ensaios/photo8.jpg","/ensaios/photo9.jpg","/ensaios/photo10.jpg","/ensaios/photo11.jpg","/ensaios/photo12.jpg","/ensaios/photo13.jpg","/ensaios/photo14.jpg","/ensaios/photo15.jpg","/ensaios/photo16.jpg","/ensaios/photo17.jpg", ,"/ensaios/photo18.jpeg"]

  return (
    <div className="fotos">
        {img.map((img, index) => (
          <div className="photo-img" style={{backgroundImage: `url(${img})`}}></div>
        ))}
    </div>
  )
}

export default Fotos