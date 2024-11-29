import style from './layout.module.scss';

function Layout({ children }) {
    const { wraplayout, container } = style;

    return (
        <main className={wraplayout}>
            <div className={container}>{children}</div>
        </main>
    );
}

export default Layout;
