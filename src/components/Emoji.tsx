import bullsEye from "../assets/bullsEye.webp";
import thumbsUp from "../assets/thumbsUp.webp";
import meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "40px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginBottom={10} />;
};

export default Emoji;
