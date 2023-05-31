import * as Yup from "yup";
import {Book} from "../../core/models/book";

const ISBNRegex = /^(?:ISBN(?:-1[03])?:?●)?(?=[0-9X]{10}$|(?=(?:[0-9]+[-●]){3})[-●0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[-●]){4})[-●0-9]{17}$)(?:97[89][-●]?)?[0-9]{1,5}[-●]?[0-9]+[-●]?[0-9]+[-●]?[0-9X]$/
export const validationSchema = Yup.object({
    name: Yup.string()
        .required('Введите название книги'),
    publicationYear: Yup.number()
        .nullable()
        .min(1980, 'Год должен быть больше 1980')
        .integer('Введите целое число')
        .max(new Date().getFullYear(), 'Вы не в будущем!'),
    ISBN: Yup.string()
        .nullable()
        .matches(ISBNRegex, 'Введите корректный ISBN'),
    rating: Yup.number()
        .nullable()
        .min(0, 'Введите число от 0 до 5')
        .max(5, 'Введите число от 0 до 5'),
})

export const defaultFormValues: Book = {
    name: '',
    authors: '',
    publicationYear: null,
    ISBN: null,
    rating: null,
    cover: null,
    uid: '',
}

