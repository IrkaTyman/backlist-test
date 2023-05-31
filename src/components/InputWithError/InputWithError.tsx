import React, {FC} from 'react';
import classes from './InputWithError.module.scss';
import {Input, InputProps, Typography} from "antd";
import {typedMemo} from "core/utils/typed-memo";

const {Text} = Typography;

type Props = Readonly<InputProps & {
    error?: string;
    containerClassName?: string;
}>

const InputWithErrorComponent: FC<Props> = (props) => {
    return (
        <div className={`${props.containerClassName} ${classes['input-with-error']}`}>
            <Input {...props} className={`${props.error ? classes['error-input'] : ''}`}/>
            <Text className={`${classes['error-message']}`}>
                {props.error}
            </Text>
        </div>
    )
}

export const InputWithError = typedMemo(InputWithErrorComponent);