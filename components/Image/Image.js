import NextImage from 'next/image';
import styles from './Image.module.css';
const Image = ({ width, maxWidth, ...rest}) => {
    let widths = {};
            
    width ? widths ['width'] = width : "50%";
    maxWidth ? widths ['maxWidth'] = maxWidth : "50%";
                              
    return (
        <div className={styles.imageContainer} style={widths}>
            <NextImage clasSName={styles.image} {...rest} />
        </div>
    );
};
export default Image;