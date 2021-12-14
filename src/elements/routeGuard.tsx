import { useState, useContext } from "react";

import { Navigate } from "react-router-dom";
import UserContext from "@/userContext";
import Modal from "@/components/modal/modal";
import SignIn from "@/pages/users/signIn";

interface IGuardedRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

const RouteGuard = (props: IGuardedRouteProps) => {
  const userContext = useContext(UserContext);
  const [modalShown, setShown] = useState(true);
  const hide = () => setShown(false);

  // user logged in
  if (userContext.userName !== undefined) {
    return props.children;
  }
  // user is signing in
  if (modalShown) {
    return (
      <Modal>
        <SignIn onExit={hide} />
      </Modal>
    );
  }
  // user decided not to sign in
  return <Navigate to={props.redirectTo} />;
};

export default RouteGuard;
