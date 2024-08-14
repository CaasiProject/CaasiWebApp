import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import logo from "../Assets/Caasi-croped-logo.png";
import { UserServices } from "../Services/User/UserServices";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthServices";

const Root = styled(Box)({
  margin: 0,
  "& .mainContainer": {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .content": {
      display: "grid",
      width: "25vw",
      height: "auto",
      padding: "20px", // Added padding for spacing inside the border
      border: "2px solid transparent", // Invisible border
      borderRadius: "10px", // Optional: rounded corners
      "& .logo": {
        display: "flex",
        justifyContent: "center",
        width: "237px",
      },
      "& .textField": {
        marginBottom: "10px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          backgroundColor: "#EBEBEB",
          zIndex: -1,
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
      },
      "& .MuiButton-root": {
        borderRadius: "10px",
        textTransform: "none",
      },
    },
  },
});

const Login = () => {
  const [data, setData] = useState({});
  const [condition, setCondition] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogIn = async () => {
    try {
      let res = await UserServices.loginUser(data);
      if (res.success) {
        alert(res.message);
        AuthService.logIn(res.data.user, res.data.accessToken);
        navigate("/dashboard");
      } else {
        alert(res.error);
      }
    } catch (error) {
      console.log(error);
    }

    setCondition(true);
  };

  return (
    <Root>
      <Box className="mainContainer">
        <Box className="content">
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="logo">
                <img src={logo} width="100%" alt="logo" />
              </Box>
            </Box>
            <Box sx={{ textAlign: "start", marginBottom: 3 }}>
              <Typography variant="h4">Welcome!</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="body1">Email</Typography>
            <TextField
              className="textField"
              required
              fullWidth
              type="email"
              id="email"
              size="small"
              name="email"
              value={data?.email || ""}
              onChange={handleChange}
              placeholder="Enter Email"
              error={condition && !data?.email}
              helperText={condition && !data?.email && "Enter your Email"}
            />
          </Box>
          <Box>
            <Typography variant="body1">Password</Typography>
            <TextField
              required
              fullWidth
              className="textField"
              size="small"
              name="password"
              value={data?.password || ""}
              onChange={handleChange}
              type="password"
              id="password"
              placeholder="Enter Password"
              error={condition && !data?.password}
              helperText={condition && !data?.password && "Enter your Password"}
            />
          </Box>
          <Link
            href=""
            sx={{
              textDecoration: "none",
              color: "primary",
              textAlign: "end",
              marginBottom: 2,
              fontWeight: "bolder",
            }}
          >
            <Typography variant="body2">Forget Password?</Typography>
          </Link>
          <Button
            size="large"
            variant="contained"
            fullWidth
            onClick={handleLogIn}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Root>
  );
};

export default Login;
