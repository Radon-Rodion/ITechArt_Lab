import { useDispatch, useSelector } from "react-redux";
import { ProductInfo } from "@/data/productInfos";
import { addGame } from "@/redux/actionCreators/cartActionsCreator";
import StarsMark from "@/elements/starsMark/starsMark";
import CategoryMarkers from "@/elements/gameCategoryMarkers/categoryMarkers";
import PurpleButton from "@/elements/purpleButton/purpleButton";

import styles from "./gameCard.module.scss";
import { RootState } from "@/redux/store/store";
import SignButton from "@/elements/signButton/signButton";
import AdminForm from "../forms/adminForm";
import { formByName } from "@/data/adminFormsParams";

interface IGameCardProps {
  gameInfo: ProductInfo;
}

const GameCard = (props: IGameCardProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.info);

  const isLogged = user.userName !== undefined;
  const { isAdmin } = user;

  const getCard = () => {
    dispatch(addGame(props.gameInfo));
  };

  const adminForm = <AdminForm formInfo={formByName("Edit card")} gameInfo={props.gameInfo} />;

  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <CategoryMarkers pc={props.gameInfo.isPC} xbox={props.gameInfo.isXBox} ps={props.gameInfo.isPS} />
        <img src={props.gameInfo.image} alt={props.gameInfo.image} className={styles.image} />
        <div className={styles.frontInfo}>
          <div className={styles.gameName}>{props.gameInfo.name}</div>
          <div className={styles.gmaePrice}>{`${props.gameInfo.price}$`}</div>
          <StarsMark value={props.gameInfo.mark} />
        </div>
      </div>

      <div className={styles.back}>
        <div className={styles.backContent}>
          <div className={styles.description}>{props.gameInfo.description}</div>
          <div className={styles.ageCategory}>{`${props.gameInfo.ageCategory}+`}</div>
          {isLogged ? <PurpleButton name="Add to cart" className={styles.button} onClick={getCard} /> : undefined}
          {isAdmin ? <SignButton name="Edit card" className={styles.button} form={adminForm} /> : undefined}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
