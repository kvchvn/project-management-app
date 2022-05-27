import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { StyledAbout, StyledWrapper, StyledDescription, StyledWelcomeButton } from './styles';
import { useUserSelector } from '../../store/selectors';

function Welcome() {
  const user = useUserSelector();
  return (
    <>
      <Navbar>
        {!user ? (
          <div>
            <Link to={`/${routerPaths.auth}`} state={'signIn'}>
              <StyledWelcomeButton>Sign In</StyledWelcomeButton>
            </Link>
            <Link to={`/${routerPaths.auth}`} state={'signUp'}>
              <StyledWelcomeButton>Sign Up</StyledWelcomeButton>
            </Link>
          </div>
        ) : (
          <Link to={routerPaths.main}>
            <StyledButton variant="primary">Go to Main page</StyledButton>
          </Link>
        )}
      </Navbar>
      <StyledWrapper>
        <StyledAbout>
          <h2>О курсе</h2>
          <StyledDescription>
            Онлайн курс «Разработка на React». Бесплатный курс от сообщества The Rolling Scopes.
            Курс для студентов, которые имеют знания и практический опыт использования следующих
            технологий и инструментов: JavaScript, TypeScript Git, GitHub, NPM, Webpack, CSS3 /
            HTML5, Chrome DevTools, Figma, Понимание концепции REST API
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>О проекте</h2>
          <StyledDescription>
            Система управления проектами – приложение помогающее достичь поставленные задачи
            отдельному человеку в команде или группе разработчиков.
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <h2>О команде</h2>
          <StyledDescription>
            <span>Приложение разработано</span>
            <span>Anton Kachan</span>
            <span>Dinmukhamed Sailaubek</span>
            <span>Dilbar Akkaya</span>
          </StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  );
}

export default Welcome;
