import "./Contact.css"
import {useState, useEffect} from "react"

function Contact() {

  const [contact, setContact] = useState([])

  useEffect(() => {
    fetch("/contact.json")
    .then((response) => response.json())
    .then((jsonData) => setContact(jsonData))
    .catch((error) => console.error("Deu erro", error))
  }, [])

  return (
    <div className="contact">
      <div className="container-top"></div>
      <div className="container-h1">
        <h1>Como você pretende falar comigo?</h1>
      </div>
      <div className="contacts">
        {contact.map((item, index) => (
          <div className="item-contacts" key={index}>
          <img src={item.img} />
          <h3>{item.text}</h3>
          <p>{item.text}</p>
          <a href={item.href} style={{fontWeight: "bold"}}>{item.contact}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact