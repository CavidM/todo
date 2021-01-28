import { goTo } from '../tools/Routing';

export default function MessengerLayout({
  children
}: {
  children: any;
}) {
  return (
    <>
      <h3>Messenger layout</h3>
      <button onClick={() => goTo('/messenger')}></button>
      {children}
    </>
  );
}
