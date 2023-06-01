import React, {FC} from 'react';
import classes from './Header.module.scss';
import {Button} from "antd";
import {typedMemo} from "core/utils/typed-memo";
import logo from "assets/logo.svg";
import Search from "antd/es/input/Search";
import {useBooksStore} from "../../core/store/books/store";

type Props = Readonly<{}>

const HeaderComponent: FC<Props> = (props) => {
    const setEditorState = useBooksStore(store => store.setEditorState);
    const setSearch = useBooksStore(store => store.setSearch);
    const updateBooks = useBooksStore(store => (search: string) => store.updateBooks(store.sorting, search))

    return (
        <header className={`${classes.header}`}>
            <div className={`${classes.column} ${classes.header__logo}`}>
                <img src={logo} alt="backlist site"/>
            </div>
            <Search className={`${classes.column} ${classes.header__search}`}
                    onSearch={value => {
                        setSearch(value);
                        updateBooks(value);
                    }}
                    placeholder={'Поиск'}/>
            <div className={`${classes.column} ${classes.header__actions}`}>
                <Button type={'text'} onClick={() => setEditorState(null, true)}>Добавить книгу</Button>
            </div>

        </header>
    )
}

export const Header = typedMemo(HeaderComponent);