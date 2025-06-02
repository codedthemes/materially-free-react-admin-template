// project imports
import CommonAuthLayout from './CommonAuthLayout';
import AuthRegister from 'sections/auth/AuthRegister';

// ==============================|| REGISTER ||============================== //

export default function Register() {
  return (
    <CommonAuthLayout title="Register" subHeading="To keep connected with us." footerLink={{ title: 'Having an account', link: '/login' }}>
      {/* Register form */}
      <AuthRegister />
    </CommonAuthLayout>
  );
}
