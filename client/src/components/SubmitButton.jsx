import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text, loadingText = "Submitting..." }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button className="btn-auth-submit" type="submit" disabled={isSubmitting}>
      <span className="text-h3 uppercase tracking-tighter">
        {isSubmitting ? loadingText : text}
      </span>
    </button>
  );
};

export default SubmitButton;
