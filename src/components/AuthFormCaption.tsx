import { Box, SxProps, Theme, Typography } from "@mui/material";

import Image from "next/image";

type Props = {
  caption: string;
  image: { src: string; alt: string };
  sx?: SxProps<Theme> | undefined;
};
export default function AuthFormCaption({ caption, image, sx }: Props) {
  return (
    <Box
      component={"div"}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      gap={2}
      mt={2}
      sx={sx}
    >
      <Image height={100} width={100} src={image.src} alt={image.alt} />

      <Typography variant="h5" component="h1" align="center" gutterBottom>
        {caption}
      </Typography>
    </Box>
  );
}
