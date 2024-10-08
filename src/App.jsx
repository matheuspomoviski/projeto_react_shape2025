import FormEmail from './components/FormEmail'
import ArticleEvento from './components/ArticleEvento'
import './App.css'
import './Responsive.css'
import ListaBeneficios from './components/ListaBeneficios'



function App() {


  return (
    <>
    <nav><h2>PROJETO SHAPE 2023: A JORNADA DO CORPO DOS SONHOS</h2></nav>
      
      <header>
       
         
         {/* div com texto e formulário */}
         <div className='texto-header'>
         <h1>Desperte o poder da sua mente e do seu corpo para <span>perder 10kg em 30 dias de forma saudável.</span></h1>
         <p>Descubra o método que já usei com mais de 5 mil pacientes, que as permitiu perder os Kg desejados de forma segura e nunca mais sofrer com o efeito Sanfonal</p>
         <p>Isso mesmo, emagreça para sempre!</p>
         <FormEmail/>
         
         </div>
         
         
       
      </header>
     
     {/* secao listas */}

      <ArticleEvento/>

      <h2 className='titulo-lista-beneficios'>Beneficios de Participar Desse Evento</h2>

      <ListaBeneficios/>

      {/* secao pra quem é o evento */}

      <section>
      
          <h2>Para Quem é o Projeto Shape 2023</h2>
          <div className="botao">
            <p>Este evento é destinado a mulheres de 18 a 55 anos, que desejam emagrecer de forma sustentável e nunca mais sofrer com o efeito sanfona.</p>
            <p>Se você está cansada de tentar perder peso sem sucesso e deseja aprender um método comprovado que já ajudou milhares de mulheres, este evento é para você.</p>
            <button>Quero me inscrever agora</button>
          </div>
        
      </section>


      {/* Secao apresentando a doutora */}

    

    </>
  )
}

export default App
