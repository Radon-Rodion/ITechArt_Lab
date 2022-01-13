import React, { useCallback } from "react";
import RadioButtonGroup from "@/elements/formElements/radioButtonGroup/radiobuttonGroup";
import Select from "@/elements/formElements/select/select";
import Block from "../../blocks/block";
import styles from "./productsFiltration.module.scss";
import fieldsValues, { Filters } from "@/data/filtrationFields";
import { getFullCategoryName } from "@/data/categoriesInfo";

interface IFiltrationProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  className: string;
}

const ProductsFiltration = (props: IFiltrationProps) => {
  const setCriteria = useCallback(
    (newCriteria: string) => {
      props.setFilters({ ...props.filters, criteria: newCriteria });
    },
    [props.filters]
  );
  const setOrder = useCallback(
    (newOrder: string) => {
      props.setFilters({ ...props.filters, order: newOrder });
    },
    [props.filters]
  );
  const setGenre = useCallback(
    (newGenre: string) => {
      props.setFilters({ ...props.filters, genres: newGenre });
    },
    [props.filters]
  );
  const setAge = useCallback(
    (newAgeString: string) => {
      props.setFilters({ ...props.filters, age: +newAgeString });
    },
    [props.filters]
  );

  return (
    <div className={props.className}>
      <Block blockName={getFullCategoryName(props.filters.category)}>
        <form>
          <div className={styles.filtersSubBlock}>
            <div className={styles.blockHeader}>Filter by</div>
            <Select name="Criteria" valuesWithText={fieldsValues.criteria} onChange={setCriteria} />
            <Select name="Type" valuesWithText={fieldsValues.order} onChange={setOrder} />
          </div>
          <RadioButtonGroup name="Genres" valuesWithText={fieldsValues.genre} onChange={setGenre} />
          <RadioButtonGroup name="Ages" valuesWithText={fieldsValues.age} onChange={setAge} />
        </form>
      </Block>
    </div>
  );
};

export default React.memo(ProductsFiltration, (prevProps, nextProps) => prevProps.filters === nextProps.filters);
