import style from '../header.module.scss';
import fbicon from '@icons/svgs/fbicon.svg';
import instaicon from '@icons/svgs/instaicon.svg';
import ytbicon from '@icons/svgs/youtubeicon.svg';
function BoxIcon({ type, href }) {
    const { boxIcon } = style;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbicon;
            case 'insta':
                return instaicon;
            case 'ytb':
                return ytbicon;
        }
    };

    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
