import React, {useRef} from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const FormEmail = () => {
  
  // script para o envio de email com apio emailjs
  const [email, setEmail] = useState('') //usado para atualizar o estado da variavel email depois do envio

  const form = useRef();
  
  function sendEmail(e){
    e.preventDefault();

      emailjs
      .sendForm('service_jozeq0f','template_cei58e5', form.current, {publicKey: 'pc9jsFlAK5_-_V2va',})
      .then(
        () => {
          console.log('Enviado')
        },
        (error) =>{
          console.log('Email não enviado..', error.text)
        }
      )
  }



  return (
    //onSubmit chama a função quando é enviado algum valor
   <div className="form"> 
    <form ref={form}  onSubmit={sendEmail}>
      <label htmlFor="email">Email:</label>

      <input type="email" name="email" id="email"
      
      //onChange chama o useState e atualiza o valor da variavel
      placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="submit" value="Me inscrever" />
      
    </form>
   </div>
  )
}

export default FormEmail