import styles from '../header.module.scss';

function Menu({ content, href }) {
    const { menu, flexItem } = styles;
    return <div className={menu}>{content}</div>;
}

export default Menu;
