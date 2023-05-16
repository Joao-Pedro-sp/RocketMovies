import { Input } from '../Input'

import { Container, Profile } from './styles.js'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquise pelo titulo" />

      <Profile>
        <div>
          <strong>Joao Pedro</strong>
          <a href="/">Sair</a>
        </div>
        <img src="https://github.com/Joao-Pedro-sp.png" alt="Foto do usuario" />
      </Profile>
    </Container>
  )
}