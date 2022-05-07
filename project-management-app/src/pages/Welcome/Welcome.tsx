import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import styled from 'styled-components';

const StyledAbout = styled.div`
max-width: 30%;
min-width: 320px;
background: #ebecf0;
padding: 1rem;
`
const StyledWrapper = styled.div`
background: #ebecf0;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1rem 2rem;
`
const StyledDescription = styled.p`
padding: 30px 0;`

function Welcome() {
  return (
    <>
      <Navbar>
      <h2>Welcome page</h2>
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </Navbar>
      <StyledWrapper>
        <StyledAbout>
          <h2>О проекте</h2>
          <StyledDescription>Система управления проектами – приложение помогающее достичь поставленные задачи отдельному человеку в команде или группе разработчиков.</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>О курсе</h2>
          <StyledDescription>Онлайн курс «Разработка на React». Бесплатный курс от сообщества The Rolling Scopes. Курс для студентов, которые имеют знания и практический опыт использования следующих технологий и инструментов: JavaScript, TypeScript
Git, GitHub, NPM, Webpack, CSS3 / HTML5, Chrome DevTools, Figma, Понимание концепции REST API</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>О команде</h2>
          <StyledDescription>Приложение разрабатывается Anton Kachan, Dinmukhamed Sailaubek, Dilbar Akkaya</StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  )
}

export default Welcome;
