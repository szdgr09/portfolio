import { ImageHolder, ImageMainWapper } from "./ProfileImage.styles";
import profile from "../../assets/images/mainProfile.jpg";
const ProfileImage = () => {
  return (
    <ImageMainWapper>
      <ImageHolder>
        <img src={profile} />
      </ImageHolder>
    </ImageMainWapper>
  );
};

export default ProfileImage;
