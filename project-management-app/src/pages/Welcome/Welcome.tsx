import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';

function Welcome() {
  return (
    <>
      <h2>Welcome page</h2>
      <Navbar>
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </Navbar>
    </>
  )
}

export default Welcome;
