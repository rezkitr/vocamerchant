'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

interface IProps {
  children: React.ReactNode;
}

const AuthFormLayout = ({ children }: IProps) => {
  return (
    <div className="flex h-[600px] flex-col justify-between rounded-2xl bg-white px-10 py-10">
      <Image src="/images/voca-logo.png" alt="vocagame" width={140} height={0} className="h-auto" />
      <div className="space-y-6">
        <div>
          <h1 className="mb-1 text-2xl font-bold">Log in to VocaMerchant</h1>
          <p className="text-base text-gray-400">Enter your email and password to log in.</p>
        </div>
        <div className="space-y-4">
          {children}
          <Button className="w-full" size="lg">
            Login
          </Button>
        </div>
        <div className="text-center text-xs">
          <p className="mb-3">
            Don&apos;t have an account yet?{' '}
            <Link href="/" className="font-bold text-primary">
              Register Now
            </Link>
          </p>
          <Link href="/" className="font-bold text-primary">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthFormLayout;
