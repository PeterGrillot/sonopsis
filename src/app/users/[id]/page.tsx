"use client";
import Loading from "@/components/loading";
import Progress, { skillKeys } from "@/components/progress";
import { UserWithMemberships } from "@/types";

import { Avatar, Box, Flex, Heading, Spinner, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserCard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserWithMemberships | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) throw new Error("Failed to fetch users");

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

    fetchUsers();
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
            <Text as="p">{user.email}</Text>
            <Text as="p">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </Text>
            <Text as="p">{user.bio}</Text>
            <ul>
              {user.memberships.map((m) => (
                <li key={m.band.id}>
                  <Link href={`/bands/${m.band.id}`}>{m.band.name}</Link>
                </li>
              ))}
            </ul>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
