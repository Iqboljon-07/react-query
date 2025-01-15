import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import avatar1 from "../../assets/avatar1.jpg";
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Top({ count, parpag, children }) {
  console.log(count);
  return (
    <>
      <nav>
        <img
          src="https://i.pinimg.com/736x/93/9d/1b/939d1b59cefb8a05b063a6a1186b605f.jpg"
          alt=""
        />
        {/* {children} */}
        <AvatarGroup total={count * parpag}>
          <Avatar src={avatar1} />
          <Avatar src="https://i.pinimg.com/236x/d1/7a/2d/d17a2d9d167800f3137b1325736a05d0.jpg" />
          <Avatar src="https://i.pinimg.com/236x/32/2c/93/322c93ecf97455e782cf8469f7b8bda8.jpg" />
          <Avatar src="https://i.pinimg.com/236x/15/82/9d/15829d026839a7c399b361d1c9f5f838.jpg" />
        </AvatarGroup>

        <IconButton style={{ color: "white" }}>
          <ShoppingCartIcon fontSize="large" />
          <CartBadge
            badgeContent={count * parpag}
            color="primary"
            overlap="circular"
          />
        </IconButton>
      </nav>
    </>
  );
}

export default Top;
