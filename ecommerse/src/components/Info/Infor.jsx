import Layout from '@components/Layout/Layout';
import { INFO_DATA } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './info.module.scss';

function Info() {
    const { container } = styles;

    return (
        <Layout>
            <div className={container}>
                {INFO_DATA.map((item) => (
                    <InfoCard
                        title1={item.title}
                        description1={item.description}
                        src={item.src}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default Info;
