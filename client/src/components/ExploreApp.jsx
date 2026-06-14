import { useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const ExploreApp = ({ className, text }) => {
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
    <button type="button" onClick={loginDemoUser} className={className}>
      {text ? text : "Explore The App"}
    </button>
  );
};

export default ExploreApp;
