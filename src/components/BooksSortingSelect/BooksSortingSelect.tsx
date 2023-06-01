import React, {FC} from "react";
import {Select} from "antd";
import {sortingOptions, sortingValue} from "./config";
import {Sorting} from "../../core/models/sorting";
import {typedMemo} from "../../core/utils/typed-memo";
import {SortingType} from "../../core/models/sorting-type";

type Props = Readonly<{

    /** Change sorting. */
    onChange(value: Sorting): void;

    /** Sorting. */
    sorting: Sorting;
}>

/** Component: Books sorting select. */
const BooksSortingSelectComponent: FC<Props> = ({onChange, sorting}) => {

    /** Get sorting type. */
    function getSortingType(): SortingType {
        if (sorting.name === 'publicationYear' && sorting.order === 'desc')
            return 'firstNew';
        if (sorting.name === 'publicationYear' && sorting.order === 'asc')
            return 'firstOld';
        if (sorting.name === 'rating' && sorting.order === 'desc')
            return 'firstBest';
        return 'firstNew';
    }

    return (<Select options={sortingOptions}
                    value={getSortingType()}
                    onChange={(value) => onChange(sortingValue[value])}/>)
}

export const BooksSortingSelect = typedMemo(BooksSortingSelectComponent);