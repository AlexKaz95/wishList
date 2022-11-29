import { FC, useEffect, useState } from 'react';
import { TWish } from '../../react-app-env';
import { WishItem } from '../WishItem/wishItem';
import styles from './wishList.module.css';

interface IWishListProps{
    list: TWish[]
}

export const WishList: FC<IWishListProps> = function({ list }){
    const [renderElement, setRenderElement] = useState<JSX.Element[]>([])

    function addImageProcess(src: string): Promise<HTMLImageElement>{
        return new Promise((resolve, reject) => {
          let img = new Image()
          img.onload = () => resolve(img)
          img.onerror = reject
          img.src = src
        })
    }

    useEffect(() => {
        const listPromises = list.map( async(el, inx) => {
            const img = await addImageProcess(el.image!.props.src);
            const startCol = Math.min(~~(img.width / ((window.screen.width - 15 * 16) / 16)), 4)
            const startRow = ~~(startCol * (img.height / img.width));
            const style = {
                gridColumn: `span 4`,
                gridRow: `span ${startRow}`
            }
            return <WishItem wish={el} key={inx} style={style}/>
        })

        Promise.all(listPromises).then((data) => setRenderElement(data))
    }, [])

    console.log('@WishList', renderElement)

    return <div className={styles.container}>
        <div className={styles.wishFormOpener}></div>
        { renderElement }
    </div>
}