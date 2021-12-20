import styles from "./blocks.module.scss";

interface IBlockProps {
  blockName: string;
  children: JSX.Element[] | JSX.Element;
  className?: string;
}

const Block = (props: IBlockProps) => {
  const contentClassName = `${styles.blockContent} ${props.className}`;

  return (
    <div className={styles.block}>
      <div className={styles.blockHeader}>{props.blockName}</div>
      <div className={contentClassName}>{props.children}</div>
    </div>
  );
};

Block.defaultProps = {
  className: "",
};

export default Block;
