import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './AppHeader.module.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function AppHeader(props) {
  const history = useHistory();

  const changeStory = () => {
    history.push('/todos');
  };
  return (
    <Container fluid className={styles['app-header']}>
      <Row>
        <Button
          variant="contained"
          onClick={() => {
            changeStory();
          }}
        >
          Todos
        </Button>
        <Col>Application</Col>
      </Row>
    </Container>
  );
}

export default AppHeader;
