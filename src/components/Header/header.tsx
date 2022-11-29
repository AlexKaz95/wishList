import { FC } from 'react';
import styles from './header.module.css';

interface IHeaderProps{
    count: number
}

export const Header: FC<IHeaderProps> = function({ count }){
    return <div className={styles.container}>
        <h1 className={styles.title}>Хотелки-хотелочки</h1>
        <p className={styles.subTitle}>{ count } штук в запасе.</p>
    </div>
}