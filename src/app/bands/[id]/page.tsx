"use client";
import Loading from "@/components/loading";
import Progress, { skillKeys } from "@/components/progress";
import { Band } from "@prisma/client";

import { Avatar, Box, Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserCard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<Band | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBands() {
      try {
        const response = await fetch(`/api/bands/${id}`);
        if (!response.ok) throw new Error("Failed to fetch bands");

        const data = await response.json();

        setUser(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          setLoading(false);
        }
      }
    }

    fetchBands();
  }, []);

  if (loading) return <Loading />;

  if (error)
    return (
      <Box p="4">
        <Text>{error.message}</Text>
      </Box>
    );

  if (!user)
    return (
      <Box p="4">
        <Text>No user found with ID: {id}</Text>
      </Box>
    );

  return (
    <Box p="4">
      <Flex gap="3">
        <Flex flexShrink="0">
          <Avatar
            size="8"
            src={user?.image || "https://i.pravatar.cc/150"}
            fallback={user.name?.charAt(0) || "U"}
          />
        </Flex>
        <Flex align="center">
          <Box>
            <Heading>{user?.name}</Heading>
            <Text as="p">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </Text>
            <Text as="p">{user?.description}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
