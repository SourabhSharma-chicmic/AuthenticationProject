import AuthForm from '../components/Auth/AuthForm';
import { useHistory,useParams} from 'react-router-dom';

const AuthPage = () => {
  // const history = useHistory();
  // history.push('/');
  // const {id} = useParams();
  return <>
  {/* <h2>{id}</h2> */}
  <AuthForm />
  </>;
};

export default AuthPage;
