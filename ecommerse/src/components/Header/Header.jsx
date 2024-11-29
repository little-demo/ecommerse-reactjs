import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './header.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import reloadicon from '@icons/svgs/reloadicon.svg';
import hearticon from '@icons/svgs/hearticon.svg';
import carticon from '@icons/svgs/carticon.svg';

function Header() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => (
                            <BoxIcon
                                key={item.type}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => (
                            <Menu
                                key={item.content}
                                content={item.content}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{
                            width: '153px',
                            height: '53px'
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => (
                            <Menu
                                key={item.content}
                                content={item.content}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={reloadicon}
                            alt='reloadicon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={hearticon}
                            alt='hearticon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={carticon}
                            alt='carticon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
