import React, { Suspense, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "@/components/modal/modal";
import SignIn from "@/components/forms/signIn";
import { RootState } from "@/redux/store/store";
import Spinner from "./spinner/spinner";

interface IGuardedRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

const RouteGuard = (props: IGuardedRouteProps) => {
  const userName = useSelector((state) => (state as RootState).user.info.userName);
  const [modalShown, setShown] = useState(true);
  const hide = () => setShown(false);

  // user logged in
  if (userName !== undefined) {
    return <Suspense fallback={<Spinner />}>{props.children}</Suspense>;
  }
  // user is signing in
  if (modalShown) {
    return (
      <Modal>
        <SignIn onExit={hide} redirectAfterSign="/" />
      </Modal>
    );
  }
  // user decided not to sign in
  return <Navigate to={props.redirectTo} />;
};

export default RouteGuard;
