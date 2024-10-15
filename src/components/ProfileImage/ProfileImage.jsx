import { ImageHolder, ImageMainWapper } from './ProfileImage.styles';
import img from '../../assets/hero.jpg';

const ProfileImage = () => {
  return (
    <ImageMainWapper>
      <ImageHolder>
        <img src={img} />
      </ImageHolder>
    </ImageMainWapper>
  );
};

export default ProfileImage;
