import { ImageHolder, ImageMainWapper } from "./ProfileImage.styles";

const ProfileImage = () => {
  return (
    <ImageMainWapper>
      <ImageHolder>
        <img
          src={
            "https://scontent.fmnl8-6.fna.fbcdn.net/v/t39.30808-6/454572228_8364839066860092_4767444436354563231_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEw4PNxAF6j1nou_wgBNNfXtcu8HXQxAXO1y7wddDEBczbQX9wPkecKJ1qTCcZ7Asewh5yWrvBXoCvyGMtbhLKa&_nc_ohc=0_K0oiH8PecQ7kNvgGUTZ2z&_nc_ht=scontent.fmnl8-6.fna&oh=00_AYC5z08i9tfx4V0GzRjwB-PwTuXF2i2N-rvZ_jP-_Elw-g&oe=66BE45C5"
          }
        />
      </ImageHolder>
    </ImageMainWapper>
  );
};

export default ProfileImage;
