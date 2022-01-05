import GameCard from "@/components/gameCard/gameCard";
import { ProductInfo } from "@/data/productInfos";
import styles from "./blocks.module.scss";
import Block from "@/components/blocks/block";
import { ProductsResource } from "@/api/clientRequests/getProductInfos";

interface IGamesBlockProps {
  blockName: string;
  resource?: ProductsResource | undefined;
  products?: Array<ProductInfo> | undefined;
}

const GamesBlock = (props: IGamesBlockProps) => {
  const productsArr =
    (props.products === undefined && props.resource !== undefined
      ? (props.resource.products.read() as Array<ProductInfo>) // products with suspense
      : props.products) ?? []; // or from custom hook

  if (!productsArr.length) return <h1>Nothing found(..</h1>;
  return (
    <Block blockName={props.blockName}>
      {productsArr.map((info: ProductInfo) => (
        <div className={styles.blockContentElement} key={info.key}>
          <GameCard gameInfo={info} />
        </div>
      ))}
    </Block>
  );
};

GamesBlock.defaultProps = {
  resource: undefined,
  products: undefined,
};

export default GamesBlock;
