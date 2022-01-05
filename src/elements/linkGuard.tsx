import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "@/components/forms/signIn";
import SignButton from "@/elements/signButton/signButton";
import { RootState } from "@/redux/store/store";

interface IGuardedLinkProps {
  name: string;
  to: string;
  className: string;
  classNameActive?: string;
  children?: JSX.Element;
}

const LinkGuard = (props: IGuardedLinkProps) => {
  const userName = useSelector((state) => (state as RootState).user.info.userName);

  if (userName === undefined) {
    return (
      <SignButton
        className={props.className}
        name={props.name}
        form={<SignIn onExit={undefined} redirectAfterSign={props.to} />}
      >
        {props.children}
      </SignButton>
    );
  }

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? `${props.classNameActive} ${props.className}` : props.className)}
    >
      {props.name}
      {props.children}
    </NavLink>
  );
};

LinkGuard.defaultProps = {
  classNameActive: "",
  children: null,
};

export default LinkGuard;
