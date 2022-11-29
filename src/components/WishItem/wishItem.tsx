import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { TWish } from '../../react-app-env';
import styles from './wishItem.module.css';

interface IWishItemProps {
    wish: TWish,
    style: CSSProperties
}

export const WishItem: FC<IWishItemProps> = function({ wish, style }){
    return <div className={styles.container} style={style}>
        <p className={styles.title}>{wish.title}</p>
        <p className={styles.description}>{wish.description}</p>
        { <div className={styles.image} style={{backgroundImage: `url(${wish.image?.props.src})`}}></div> }
    </div>
}