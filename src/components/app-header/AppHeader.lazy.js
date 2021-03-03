import loadable from '@loadable/component';

export default function AppHeaderLazy() {
  const Header = loadable(() => import('./AppHeader'));

  return <Header />;
}
