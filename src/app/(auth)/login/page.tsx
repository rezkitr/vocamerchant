'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthFormLayout } from '@/components';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
  const formSchema = z.object({
    email: z.string(),
    password: z.string()
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="grid grid-cols-2 gap-x-8">
        <AuthFormLayout>
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
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
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </AuthFormLayout>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem enim vero
          voluptatem recusandae laboriosam ratione saepe reiciendis tempora assumenda, repellendus
          aperiam similique quod itaque. Eum explicabo deserunt cumque veniam!
        </div>
      </div>
    </div>
  );
};

export default Login;
