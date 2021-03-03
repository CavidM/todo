import { goTo } from '../tools/Routing';
import Button from '@material-ui/core/Button';

export default function MessengerLayout({
  children
}: {
  children: any;
}) {
  return (
    <>
      <h3>Messenger layout</h3>
      <Button variant="contained" onClick={() => goTo('/messenger')}>
        Messenger
      </Button>
      {children}
    </>
  );
}
