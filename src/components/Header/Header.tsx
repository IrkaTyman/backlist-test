import React, {FC} from 'react';
import classes from './Header.module.scss';
import {Button} from "antd";
import {typedMemo} from "core/utils/typed-memo";
import logo from "assets/logo.svg";
import Search from "antd/es/input/Search";
import {useBooksStore} from "../../core/store/books/store";

/** Component: Header. */
const HeaderComponent: FC = () => {

    /** Set editor state - editingBook and isOpened. */
    const setEditorState = useBooksStore(store => store.setEditorState);

    /** Set search text. */
    const setSearch = useBooksStore(store => store.setSearch);

    /** Update all books. */
    const updateBooks = useBooksStore(store => (search: string) => store.updateBooks(store.sorting, search))

    return (
        <header className={`${classes.header}`}>
            <div className={`${classes.column} ${classes.header__logo}`}>
                <img src={logo} alt="backlist site"/>
            </div>
            <Search className={`${classes.column} ${classes.header__search}`}
                    onSearch={value => {
                        const parsedValue = value.trim();
                        setSearch(parsedValue);
                        updateBooks(parsedValue);
                    }}
                    placeholder={'Поиск'}/>
            <div className={`${classes.column} ${classes.header__actions}`}>
                <Button type={'text'} onClick={() => setEditorState(null, true)}>Добавить книгу</Button>
            </div>
        </header>
    )
}

export const Header = typedMemo(HeaderComponent);