import React, {FC} from 'react';
import classes from './InputWithError.module.scss';
import {Input, InputProps, Typography} from "antd";
import {typedMemo} from "core/utils/typed-memo";

const {Text} = Typography;

type Props = Readonly<InputProps & {

    /** Error text. */
    error?: string;

    /** ClassName form Input container. */
    containerClassName?: string;
}>

/** Component: Input with error support. */
const InputWithErrorComponent: FC<Props> = (props) => {
    return (
        <div className={`${props.containerClassName || ''} ${classes['input-with-error']}`}>
            <Input {...props} className={`${props.error ? classes['error-input'] : ''}`}/>
            <Text className={`${classes['error-message']}`}>
                {props.error}
            </Text>
        </div>
    )
}

export const InputWithError = typedMemo(InputWithErrorComponent);