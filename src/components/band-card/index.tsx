import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { Band } from "@prisma/client";

const BandCard = ({ band }: { band: Band }) => {
  return (
    <Card className={styles.card}>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src={`${band.image || "https://i.pravatar.cc/150"}`}
          fallback={band?.name?.charAt(0) || "U"}
        />
        <Box>
          <Text as="p" size="2" weight="bold">
            {band.name}
          </Text>
          <Text as="p" size="2">
            {band.description}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
};

export default BandCard;
