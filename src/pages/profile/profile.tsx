import { useSelector } from "react-redux";
import ProfileBlock from "@/components/blocks/profileBlock";
import styles from "./profile.module.scss";
import { RootState } from "@/redux/store/store";

const Profile = () => {
  const userName = useSelector((state) => (state as RootState).user.userName);
  const blockName = `${userName} profile page`;
  return (
    <div className={styles.allPage}>
      <ProfileBlock blockName={blockName} />
    </div>
  );
};

export default Profile;
