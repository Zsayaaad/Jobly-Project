import { FormRow, SubmitButton } from "../../components";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import { Form } from "react-router-dom";
import TabSwitcher from "../../components/auth/TabSwitcher";
import AuthHeader from "../../components/auth/AuthHeader";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-on-background p-gutter">
      <AuthHeader />

      <main className="w-full max-w-[480px] mt-xl">
        {/* Auth Card */}
        <div className="bg-surface-container-lowest border-4 border-on-background brutalist-shadow p-lg">
          <TabSwitcher activeTab="register" />

          <div className="mb-lg">
            <h1 className="text-h2 text-on-background mb-xs">
              Create Account.
            </h1>
            <p className="text-body text-secondary">
              Initialize your operator profile and start tracking.
            </p>
          </div>

          <Form method="post" className="space-y-md">
            {/* Full Name Field */}
            <FormRow
              type="text"
              name="name"
              labelText="Name"
              placeholder="JOHN DOE"
              dataIcon="person"
              defaultValue="ziad"
            />

            {/* Last Name Field */}
            <FormRow
              type="text"
              name="lastName"
              labelText="Last Name"
              placeholder="DOE"
              dataIcon="person"
              defaultValue="elsayyad"
            />

            {/* Email Field */}
            <FormRow
              type="email"
              name="email"
              labelText="Email Address"
              placeholder="USER@JOBIFY.COM"
              dataIcon="mail"
              defaultValue="z@gmail.com"
            />

            {/* Location Field */}
            <FormRow
              type="text"
              name="location"
              labelText="Location"
              placeholder="Cairo"
              dataIcon="location_on"
              defaultValue="earth"
            />

            {/* Password Field */}
            <FormRow
              type="password"
              name="password"
              labelText="Security Key"
              placeholder="********"
              dataIcon="lock"
              defaultValue="secret1234"
            />

            {/* Terms Checkbox */}
            <div className="flex items-center gap-sm pt-xs">
              <input
                className="w-6 h-6 border-2 border-on-background bg-surface-container-lowest rounded-none! text-primary-container focus:ring-0"
                id="terms"
                type="checkbox"
              />
              <label
                className="text-mono-label uppercase text-on-background cursor-pointer"
                htmlFor="terms"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="underline decoration-2 hover:text-primary transition-colors"
                >
                  Terms & Protocols
                </a>
              </label>
            </div>

            <SubmitButton text="Initialize Profile" />
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
            © 2026 JOBIFY RECRUITMENT TECHNOLOGIES. ALL RIGHTS RESERVED.
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

export default Register;
