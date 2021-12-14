import styles from "./categoryMarkers.module.scss";
import { categoryInfos } from "@/data/categoriesInfo";

interface ICategoryMarkersProps {
  pc: boolean;
  xbox: boolean;
  ps: boolean;
}

const CategoryMarkers = (props: ICategoryMarkersProps) => (
  <div className={styles.categories}>
    {[
      { prop: props.pc, name: "PC", key: 1 },
      { prop: props.ps, name: "Playstation", key: 2 },
      { prop: props.xbox, name: "Xbox", key: 3 },
    ].map((category) =>
      category.prop ? (
        <img
          src={categoryInfos.find((info) => info.name === category.name)?.image}
          alt={`${category.name}.jpg`}
          className={styles.category}
          key={category.key}
        />
      ) : null
    )}
  </div>
);

export default CategoryMarkers;
