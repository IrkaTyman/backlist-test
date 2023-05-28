import React from 'react';
import {Select} from "antd";
import {BookCard} from "../components/BookCard";


export const Comp = () => <BookCard name={'Благославление небожителей'}
                                    authors={['Мосян Тунсю']}
                                    publicationYear={2023}
                                    rating={3.5}
                                    ISBN={null}
                                    cover={null}/>