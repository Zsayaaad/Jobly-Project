import GoogleIcon from "../../assets/icons/GoogleIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import {
  AuthHeader,
  FormRow,
  SubmitButton,
  TabSwitcher,
} from "../../components";
import { Form, useNavigate } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret1234",
    };

    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      return navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background p-gutter">
      <AuthHeader />

      <main className="w-full max-w-[480px] mt-xl">
        {/* Auth Card */}
        <div className="bg-surface-container-lowest border-4 border-on-background brutalist-shadow p-lg">
          <TabSwitcher activeTab="login" />

          <div className="mb-lg">
            <h1 className="text-h2 text-on-background mb-xs">Welcome Back.</h1>
            <p className="text-body text-secondary">
              Access your recruiting command center.
            </p>
          </div>

          <Form method="post" className="space-y-md">
            {/* {errors?.msg && <p style={{ color: "red" }}>{errors.msg}</p>} */}

            {/* Email Field */}
            <FormRow
              type="email"
              name="email"
              labelText="Email Address"
              placeholder="USER@JOBIFY.COM"
              dataIcon="mail"
              defaultValue="z@gmail.com"
            />

            {/* Password Field */}
            <div className="space-y-xs">
              <FormRow
                type="password"
                name="password"
                labelText="Password"
                placeholder="********"
                dataIcon="lock"
                defaultValue="secret1234"
              />
              <div className="flex justify-end">
                <a
                  className="text-mono-data uppercase text-on-background underline decoration-2 underline-offset-2 hover:bg-primary-container hover:text-black px-1 transition-colors"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-sm pt-xs">
              <input
                className="w-6 h-6 border-2 border-on-background bg-surface-container-lowest rounded-none! text-primary-container focus:ring-0"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-mono-label uppercase text-on-background cursor-pointer"
                htmlFor="remember"
              >
                Keep me logged in
              </label>
            </div>

            <SubmitButton text="Submit" />

            <button
              type="button"
              onClick={loginDemoUser}
              className="w-full py-5 bg-primary-container text-black border-2 border-on-background hover:bg-surface-container-lowest hover:text-on-background transition-colors brutalist-shadow active-press uppercase font-bold text-h3 tracking-tighter"
            >
              Explore The App
            </button>
          </Form>

          {/* Social Auth */}
          <div className="mt-lg pt-lg border-t-2 border-on-background flex flex-col gap-md">
            <div className="text-center text-mono-label uppercase text-secondary">
              Or continue with
            </div>
            <div className="grid grid-cols-2 gap-md">
              <button className="btn-auth-social">
                <GoogleIcon />
                Google
              </button>
              <button className="btn-auth-social">
                <LinkedInIcon />
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border-2 border-on-background bg-surface-container-high p-md brutalist-shadow-sm">
            <div className="text-mono-label uppercase text-on-background mb-xs">
              Active Users
            </div>
            <div className="text-h2 text-on-background">12.8k</div>
          </div>
          <div className="border-2 border-on-background bg-primary-container p-md brutalist-shadow-sm">
            <div className="text-mono-label uppercase text-black mb-xs">
              Jobs Filled
            </div>
            <div className="text-h2 text-black">840+</div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-xl text-center">
          <p className="text-mono-data text-secondary uppercase">
            © 2024 JOBIFY RECRUITMENT TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
        </div>
      </main>

      {/* Floating Status Widget */}
      <div className="fixed bottom-gutter right-gutter w-64 hidden lg:block">
        <div className="border-2 border-on-background bg-surface-container-lowest brutalist-shadow-sm p-md">
          <div className="flex items-center gap-sm mb-sm">
            <span className="w-3 h-3 bg-primary-container border border-on-background rounded-full!"></span>
            <span className="text-mono-label uppercase text-on-background">
              System Status
            </span>
          </div>
          <div className="text-mono-data text-secondary">
            All nodes operational. API latency: 14ms. High-frequency matching
            engine online.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
