import styles from '../info.module.scss';

function InfoCard({ title1, description1, src }) {
    const { containerCard, containerContent, title, description } = styles;
    return (
        <div className={containerCard}>
            <img height={40} width={41} src={src} alt='' />
            <div className={containerContent}>
                <div className={title}>{title1}</div>
                <div className={description}>{description1}</div>
            </div>
        </div>
    );
}

export default InfoCard;
