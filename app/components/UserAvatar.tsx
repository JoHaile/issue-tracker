import { Avatar } from "@radix-ui/themes";
import { User2 } from "lucide-react";
import React from "react";

interface Props {
  image?: string | null | undefined;
}

function UserAvatar({ image }: Props) {
  return (
    <span>
      <Avatar
        src={image ? image : ""}
        fallback={<User2 />}
        size="3"
        radius="full"
      />
    </span>
  );
}

export default UserAvatar;
