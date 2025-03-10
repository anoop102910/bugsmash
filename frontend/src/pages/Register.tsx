import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react';
import { useRegister } from '../services/auth.service';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  const navigate = useNavigate();
  const { register, isPending} = useRegister();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    register(data, {
      onSuccess: () => navigate('/'),
      onError: (error) => console.error('Registration failed:', error.message),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[440px] bg-[var(--smash-depth-2)] rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-[var(--smash-depth-8)]">Create an Account</h1>
            <p className="text-[var(--smash-depth-6)]">Please enter your details to sign up</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--smash-depth-7)]">Full Name</FormLabel>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--smash-depth-5)] h-5 w-5" />
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--smash-depth-6)] bg-[var(--smash-depth-2)] text-[var(--smash-depth-8)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition placeholder:text-[var(--smash-depth-5)]"
                          placeholder="Enter your full name"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--smash-depth-7)]">Email</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--smash-depth-5)] h-5 w-5" />
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--smash-depth-6)] bg-[var(--smash-depth-2)] text-[var(--smash-depth-8)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition placeholder:text-[var(--smash-depth-5)]"
                          placeholder="Enter your email"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--smash-depth-7)]">Password</FormLabel>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--smash-depth-5)] h-5 w-5" />
                      <FormControl>
                        <input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-[var(--smash-depth-6)] bg-[var(--smash-depth-2)] text-[var(--smash-depth-8)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition placeholder:text-[var(--smash-depth-5)]"
                          placeholder="Create a password"
                        />
                      </FormControl>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--smash-depth-5)] hover:text-[var(--smash-depth-7)]"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-2.5 px-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--smash-depth-10)] rounded-lg font-medium transition-colors disabled:opacity-70"
                >
                  {isPending ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="mt-6 space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[var(--smash-depth-4)]"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-[var(--smash-depth-2)] text-[var(--smash-depth-6)]">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      className="flex items-center justify-center gap-2 py-2 px-3 border border-[var(--smash-depth-4)] text-[var(--smash-depth-7)] rounded-lg hover:bg-[var(--smash-depth-8-04)] transition"
                    >
                      <img src="/google.svg" alt="Google" className="w-5 h-5" />
                      <span>Google</span>
                    </button>
                    <button 
                      type="button"
                      className="flex items-center justify-center gap-2 py-2 px-3 border border-[var(--smash-depth-4)] text-[var(--smash-depth-7)] rounded-lg hover:bg-[var(--smash-depth-8-04)] transition"
                    >
                      <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                      <span>Facebook</span>
                    </button>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <span className="text-[var(--smash-depth-6)]">Already have an account? </span>
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium transition-colors"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}; 