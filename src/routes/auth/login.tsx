import { createFileRoute, Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ThemeSwitcher } from '@/components/theme';
import { useGlobalStore } from '@/store';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;


export const Route = createFileRoute('/auth/login')({
  component: LoginPage,
});

function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { settings, setTheme } = useGlobalStore();
  const { theme } = settings;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  function onSubmit(values: LoginFormValues) {
    console.log(values);
    // Handle login logic here
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher theme={theme} toggle={toggleTheme} size="icon" />
      </div>
      <Card className="mx-auto w-full max-w-md shadow-lg border-primary/10">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access your pet store account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@example.com"
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
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
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/auth/forgot-password"
                        className="text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input type="password" autoComplete="current-password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full h-11 text-base font-semibold shadow-md" type="submit">
                Sign In
              </Button>
            </form>
          </Form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="h-10">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.493 12.274c0-.826-.074-1.62-.21-2.388H12v4.512h6.44c-.277 1.488-1.122 2.748-2.384 3.597v2.99h3.862c2.26-2.08 3.575-5.144 3.575-8.711zM11.96 24c3.24 0 5.957-1.075 7.942-2.912l-3.862-2.99c-1.07.718-2.438 1.144-4.08 1.144-3.136 0-5.79-2.115-6.736-4.96h-3.993V17.39c2.01 3.99 6.14 6.61 10.73 6.61zM5.224 14.282a7.12 7.12 0 01-.372-2.282c0-.793.137-1.562.372-2.282V6.726H1.23a11.988 11.988 0 000 10.556l3.994-3.001zM11.96 4.764c1.763 0 3.346.607 4.59 1.8l3.442-3.442C17.917 1.1 15.2 0 11.96 0 7.37 0 3.24 2.62 1.23 6.61L5.224 9.72c.947-2.845 3.6-4.956 6.736-4.956z" />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="h-10">
              <svg
                className="mr-2 h-4 w-4 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/auth" className="font-semibold text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

