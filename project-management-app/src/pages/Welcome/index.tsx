import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common';
import { useSelector } from 'react-redux';
import { TStore } from '../../store/index';
import { StyledAbout, StyledWrapper, StyledDescription } from './styles';
import StyledButton from '../../styles/components/StyledButton';

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
          <h2>О курсе</h2>
          <StyledDescription>
            Бесплатный онлайн курс «Разработка на React» от сообщества The Rolling Scopes. Курс для
            студентов, которые имеют знания и практический опыт использования следующих технологий и
            инструментов: JavaScript, TypeScript, Git, NPM, Webpack, CSS3 / HTML5.
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
