import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <div class="content">
        <div class ="title">
          <h1>Meus Filmes</h1>
          <Button title="Adicionar Filme" />
        </div>

        <div class="film">
          <a href="/">Interestellar</a>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o... </p>
          <div class="theme">
            <a href="/">Ficção Científica</a>
            <a href="/">Drama</a>
            <a href="/">Família</a>
          </div>
        </div>
        
        <div class="film">
          <a href="/">Interestellar</a>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o... </p>
          <div class="theme">
            <a href="/">Ficção Científica</a>
            <a href="/">Drama</a>
            <a href="/">Família</a>
          </div>
        </div>

        <div class="film">
          <a href="/">Interestellar</a>
          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o... </p>
          <div class="theme">
            <a href="/">Ficção Científica</a>
            <a href="/">Drama</a>
            <a href="/">Família</a>
          </div>
        </div>
      </div>
    </Container>
  )
}