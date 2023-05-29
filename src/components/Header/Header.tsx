import React, {FC} from 'react';
import classes from './Header.module.scss';
import {Button} from "antd";
import {typedMemo} from "core/utils/typed-memo";
import logo from "assets/logo.svg";
import Search from "antd/es/input/Search";

type Props = Readonly<{}>

const HeaderComponent: FC<Props> = (props) => {
    return (
        <header className={`${classes.header}`}>
            <div className={`${classes.column} ${classes.header__logo}`}>
                <img src={logo} alt="backlist site"/>
            </div>
            <Search className={`${classes.column} ${classes.header__search}`}
                    placeholder={'Поиск'}/>
            <div className={`${classes.column} ${classes.header__actions}`}>
                <Button type={'text'}>Добавить книгу</Button>
            </div>

        </header>
    )
}

export const Header = typedMemo(HeaderComponent);