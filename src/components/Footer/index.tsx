import {
  Container,
  FooterSection,
  LinkItem,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>categorias</SectionTitle>
        <Links>
          <LinkItem href="#">Ação</LinkItem>
          <LinkItem href="#">Aventura</LinkItem>
          <LinkItem href="#">RPG</LinkItem>
          <LinkItem href="#">Esportes</LinkItem>
          <LinkItem href="#">Estrategia</LinkItem>
          <LinkItem href="#">FPD</LinkItem>
          <LinkItem href="#">Simulação</LinkItem>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <LinkItem href="#">Novidades</LinkItem>
          <LinkItem href="#">Promoções</LinkItem>
          <LinkItem href="#">Em Breve</LinkItem>
        </Links>
      </FooterSection>
      <p>
        {currentYear} - &copy; Todos os direitos reservados - Desenvolvido por
      </p>
    </div>
  </Container>
)

export default Footer
