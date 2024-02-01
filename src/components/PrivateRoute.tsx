import { Navigate } from 'react-router-dom';
import { IUser } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


type ProtectedRotueProp = {
    element: React.ReactNode,
}

const PrivateRoute = ({ element }: ProtectedRotueProp) => {

    const user = useSelector((state: RootState) => state.user );


  if (user) {
    return element;
  } else {
    return <Navigate to={{ pathname: '/auth/login' }} />;
  }

};

export default PrivateRoute;