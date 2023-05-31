import React, {FC} from "react";
import {Select} from "antd";
import {sortingOptions, sortingValue} from "./config";
import {Sorting} from "../../core/models/sorting";
import {typedMemo} from "../../core/utils/typed-memo";
import {SortingType} from "../../core/models/sorting-type";
import classes from "./SortingBooksSelect.module.scss";

type Props = Readonly<{
    onChange(value: Sorting): void;
    sorting: Sorting;
}>

const SortingBooksSelectComponent: FC<Props> = ({onChange, sorting}) => {
    function onSortingTypeGet(): SortingType{
        if(sorting.name === 'publicationYear' && sorting.order === 'desc')
            return 'firstNew';
        if(sorting.name === 'publicationYear' && sorting.order === 'asc')
            return 'firstOld';
        if(sorting.name === 'rating' && sorting.order === 'desc')
            return 'firstBest';
        return 'firstNew';
    }

    return (<Select options={sortingOptions}
                    className={`${classes['sorting-books-select']}`}
                    value={onSortingTypeGet()}
                    onChange={(value) => onChange(sortingValue[value])}/>)
}

export const SortingBooksSelect = typedMemo(SortingBooksSelectComponent);