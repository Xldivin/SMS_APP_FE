import { useEffect, useState, ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { isTokenExpired } from '@/lib/utils';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const Wrapper = (props: P) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get('accessToken');
      if (!token) {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
