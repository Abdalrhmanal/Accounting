import { Box, Grid, Typography, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  params: any;
  children: React.ReactNode;
};

const Layout = ({ params, children }: LayoutProps) => {
  console.log(params);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ height: "100vh", margin: 0, padding: 0 }}
    >
      <Grid
        container
        columns={{ xs: 12, md: 12 }}
        display="flex"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: { xs: 2, md: 5 },
            height: "100%",
          }}
        >
          <Box width="100%" maxWidth={400}>
            {/* Chidlren  */}
            {children}
            {/* Chidlren  */}
            <Box display="flex" justifyContent="center" mt={2}>
              <Link href="#" passHref>
                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "textSecondary",
                  }}
                >
                  Don’t have an account? Create account
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#008CFFD6",
            height: "100%",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Image
              height={500}
              width={500}
              src="/images/imgAuth/login.png"
              alt="login-background-icon"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
