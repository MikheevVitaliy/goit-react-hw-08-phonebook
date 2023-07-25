import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
// import { useEffect } from 'react';

export default function Register() {
  // ==========================
  // useEffect(() => {
  //   const eventId = window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', eventId);
  //   };
  // });

  // const handleKeyDown = evt => {
  //   if (evt.code === 'Escape') {
  //     console.log(evt);
  //     onClose();
  //   }
  // };

  // ==========================

  return (
    <main>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </main>
  );
}
