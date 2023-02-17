import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOpenIcon from '@mui/icons-material/LockOpen';

// create button with material UI
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 25px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#F18886",
  borderColor: "#F18886",
  color:"#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#F18886",
    boxShadow: "none",
    
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F18886",
    borderColor: "#fff",
    
  },
});

const CreateLoginButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "15px 25px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  borderColor: "#F18886",
  color:"#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#F18886",
    borderColor: "#fff",
    boxShadow: "none",
    
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F18886",
    borderColor: "#fff",
    
  },
});

export default function Buttons() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <CreateLoginButton variant="contained" startIcon={<LockOpenIcon />}>Login</CreateLoginButton>
        <BootstrapButton variant="contained" disableRipple  startIcon={<PermIdentityIcon/>}>Criar Perfil</BootstrapButton>
      </Stack>
    </>
  );
}
