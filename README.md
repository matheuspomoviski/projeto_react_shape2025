# Projeto Shape 2025 - **API Emailjs**
---
Esse projeto foi desenvolvido com o uso de React, um framework do JavaScript. Decidi fazer dessa maneira para testar os conhecimentos do curso que faço pela Udemy com o professor Matheus Battisti do Hora de Codar.

---
### Divisões do projeto
Esse projeto foi divido da seguinte maneira:
*3 componentes
        > ArticleEvento.jsx
        >FormEmail.jsx
        >ListaBeneficios
*1 arquivo css para responsividade afin de não misturar com o arquivo geral de estilização do projeto

---
# Uso da **API Emailjs**
A escolha aqui foi por uma API gratuita para enviar um e-mail através dos serviços do Gmail depois do usuário preencher o formulário com o seu e-mail pessoal. *Nenhum e-mail foi salvo no processo, ficam apenas registrados na API*
[Verifique a documentação da API - EMAIL JS](https://www.emailjs.com/docs/)

## Execução da API

Dentro do componente _FormEmail.jsx_ foi desenvolvido a estrutura do HTML do formulário com uso de 02 inputs e 01 label, conforme o código:
        `    <div className="form"> 
                <form ref={form}  onSubmit={sendEmail}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"
                placeholder='Digite seu email...' onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="submit" value="Me inscrever" />
                </form>
            </div>
        `

E usando o useState que é um hook do React, foi criado a função para atribuir valor ao valor preenchido no formulário:
        `const [email, setEmail] = useState('')`

Depois disso o chamado da API já com os dados atualizados pelo hook:
        
        `function sendEmail(e){
            e.preventDefault();
            emailjs
            .sendForm('SERVICEID','TEMPLATEID', form.current, {publicKey: 'PUBLICKEY',})
            .then(
                () => {
                console.log('Enviado')
                },
                (error) =>{
                console.log('Email não enviado..', error.text)
                }
            )
        }`