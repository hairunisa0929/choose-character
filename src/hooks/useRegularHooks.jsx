import { useNavigate } from "react-router-dom";

const useRegularHooks = () => {
  const navigate = useNavigate();

  return {
    navigate,
  };
};

export default useRegularHooks;
