import {DefaultOptionType} from 'rc-select/lib/Select'
import {SortingType} from "../../core/models/sorting-type";
import {Sorting} from "../../core/models/sorting";

export const sortingOptions: (DefaultOptionType&{value: SortingType})[] = [
    {label: 'Сначала новые', value: 'firstNew'},
    {label: 'Сначала старые', value: 'firstOld'},
    {label: 'Сначала лучшие', value: 'firstBest'},
]

export const sortingValue:{[key: string] : Sorting} = {
    firstNew: {name: 'publicationYear', order: 'desc'},
    firstOld: {name: 'publicationYear', order: 'asc'},
    firstBest: {name: 'rating', order: 'desc'},
}