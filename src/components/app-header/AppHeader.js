import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styles from './AppHeader.module.css';
import {useHistory} from "react-router-dom";

function AppHeader(props) {
    const history = useHistory();

    const changeStory = () => {history.push('/todos')}
  return (
    <Container fluid className={styles['app-header']}>
      <Row>
          <Button onClick={() => {changeStory()}}>Todos</Button>
        <Col>Application</Col>
      </Row>
    </Container>
  );
}

export default AppHeader;
