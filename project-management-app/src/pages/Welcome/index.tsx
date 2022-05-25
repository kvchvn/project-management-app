import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSelector } from 'react-redux';
import { TStore } from '../../store/index';
import { StyledAbout, StyledWrapper, StyledDescription, StyledButton } from './styles';

function Welcome() {
  const { user } = useSelector((store: TStore) => store.userReducer);
  return (
    <>
      <Navbar>
        {!user ? (
          <div>
            <Link to={`/${routerPaths.auth}`}>
              <StyledButton variant="primary">Log in</StyledButton>
              <StyledButton variant="primary">Sign up</StyledButton>
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
          <h2>О проекте</h2>
          <StyledDescription>
            Система управления проектами – приложение помогающее достичь поставленные задачи
            отдельному человеку в команде или группе разработчиков.
          </StyledDescription>
        </StyledAbout>
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
          <h2>О команде</h2>
          <StyledDescription>
            Приложение разрабатывают Anton Kachan, Dinmukhamed Sailaubek, Dilbar Akkaya
          </StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  );
}

export default Welcome;
