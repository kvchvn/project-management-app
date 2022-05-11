import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle/Subtitle';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';

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
  const isUser = false;
  return (
    <>
      <Navbar>
        <Subtitle>Welcome page</Subtitle>
        {!isUser?
        <div>
                  <Link to={`/${routerPaths.auth}`}>
          <Button>Log in</Button>
        </Link>
        <Button>Sign up</Button>
        </div>
: <Link to={routerPaths.main}>cndghjnhg</Link>}
      </Navbar>
      <StyledWrapper>
        <StyledAbout>
          <Subtitle>О проекте</Subtitle>
          <StyledDescription>Система управления проектами – приложение помогающее достичь поставленные задачи отдельному человеку в команде или группе разработчиков.</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <Subtitle>О курсе</Subtitle>
          <StyledDescription>Онлайн курс «Разработка на React». Бесплатный курс от сообщества The Rolling Scopes. Курс для студентов, которые имеют знания и практический опыт использования следующих технологий и инструментов: JavaScript, TypeScript
            Git, GitHub, NPM, Webpack, CSS3 / HTML5, Chrome DevTools, Figma, Понимание концепции REST API</StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <Subtitle>О команде</Subtitle>
          <StyledDescription>Приложение разрабатывается Anton Kachan, Dinmukhamed Sailaubek, Dilbar Akkaya</StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  )
}

export default Welcome;
