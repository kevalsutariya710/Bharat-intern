import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utils/lo.svg";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "" }}>
      <img src={logo} alt="logo" height={55}
        style={{ marginLeft: "4px" }}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
