import { ImageHolder, ImageMainWapper } from "./ProfileImage.styles";

const ProfileImage = () => {
  return (
    <ImageMainWapper>
      <ImageHolder>
        <img
          src={
            "https://media.licdn.com/dms/image/D5603AQEr1mLV4QXWww/profile-displayphoto-shrink_800_800/0/1698287256828?e=1713398400&v=beta&t=pCBJwbJ623ldrQcrNVfJoRdM4GjsoD8YYUmiL8NyQhQ"
          }
        />
      </ImageHolder>
    </ImageMainWapper>
  );
};

export default ProfileImage;
