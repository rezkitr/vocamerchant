import Image from 'next/image';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/auth-bg.png" alt="auth-bg" fill />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
