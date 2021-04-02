import { List } from '@material-ui/core';

export default function MessageList({
  children
}: {
  children: JSX.Element[];
}) {
  return <List>{children}</List>;
}
