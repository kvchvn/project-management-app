import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import Subtitle from '../../components/Subtitle/Subtitle';
import { Link } from 'react-router-dom';
import { routerPaths } from '../../constants/common-constants';
import { useSelector } from 'react-redux';
import { TStore } from '../../store/index';

const StyledAbout = styled.div`
  max-width: 30%;
  min-width: 320px;
  background: #ebecf0;
  padding: 1rem;
`;
const StyledWrapper = styled.div`
  background: #ebecf0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const StyledDescription = styled.p`
  padding: 30px 0;
`;

function Welcome() {
  const { user } = useSelector((store: TStore) => store.userReducer);
  return (
    <>
      <Navbar>
        {!user ? (
          <div>
            <Link to={`/${routerPaths.auth}`}>
              <Button>Log in</Button>
              <Button>Sign up</Button>
            </Link>
          </div>
        ) : (
          <Link to={routerPaths.main}>
            <Button>Go to Main page</Button>
          </Link>
        )}
      </Navbar>
      <StyledWrapper>
        <StyledAbout>
          <Subtitle>О проекте</Subtitle>
          <StyledDescription>
            Система управления проектами – приложение помогающее достичь поставленные задачи
            отдельному человеку в команде или группе разработчиков.
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <Subtitle>О курсе</Subtitle>
          <StyledDescription>
            Онлайн курс «Разработка на React». Бесплатный курс от сообщества The Rolling Scopes.
            Курс для студентов, которые имеют знания и практический опыт использования следующих
            технологий и инструментов: JavaScript, TypeScript Git, GitHub, NPM, Webpack, CSS3 /
            HTML5, Chrome DevTools, Figma, Понимание концепции REST API
          </StyledDescription>
        </StyledAbout>
        <StyledAbout>
          <Subtitle>О команде</Subtitle>
          <StyledDescription>
            Приложение разрабатывают Anton Kachan, Dinmukhamed Sailaubek, Dilbar Akkaya
          </StyledDescription>
        </StyledAbout>
      </StyledWrapper>
    </>
  );
}

export default Welcome;
