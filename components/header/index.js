import { withAuth } from '../with-auth';
import Menu from '../menu';

function Header() {
  return <div><Menu /></div>;
}

export default withAuth(Header);
