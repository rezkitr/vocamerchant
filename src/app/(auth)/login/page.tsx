'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthFormLayout } from '@/components';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const infoItemsImages = [
    '/images/onboarding-1.png',
    '/images/onboarding-2.png',
    '/images/onboarding-3.png'
  ];

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must contain at least 6 character(s)' })
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onLogin = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="grid w-full grid-cols-2 gap-x-8">
        <AuthFormLayout>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onLogin)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" size="lg" type="submit">
                Login
              </Button>
            </form>
          </Form>
        </AuthFormLayout>
        <div className="h-[640px] rounded-2xl">
          <Carousel
            className="h-full w-full"
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {infoItemsImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[640px] overflow-hidden rounded-2xl">
                    <Image src={image} alt={image} fill />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Login;
