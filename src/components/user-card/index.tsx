import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { User } from "@prisma/client";
import { UserWithMemberships } from "@/types";
import Link from "next/link";

const UserCard = ({ user }: { user: UserWithMemberships }) => {
  return (
    <Card className={styles.card}>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src={`${user.image || "https://i.pravatar.cc/150"}`}
          fallback={user?.name?.charAt(0) || "U"}
        />
        <Box>
          <Text as="p" size="2" weight="bold">
            {user.name} | {user.email}
          </Text>
          <Box>
            <Text as="p" size="1" color="gray">
              Member of:{" "}
              {user.memberships?.length > 0
                ? user.memberships.map((m) => m.band.name).join(", ")
                : "No memberships"}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Card>
  );
};

export default UserCard;
