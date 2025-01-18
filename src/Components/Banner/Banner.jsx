import {
  BannerVideo,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerVideo autoPlay loop muted>
        <source src={video.video} type="video/mp4" />
        Your browser does not support the video tag.
      </BannerVideo>

      <BannerContent>
        <div>
          <BannerTitle category={video.categoria}>
            {video.categoria}
          </BannerTitle>
          <BannerDescription>{video.descricao}</BannerDescription>
        </div>
        <BannerImg src={video.img} alt={video.titulo} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
