"use client";
import { useEffect, useState } from "react";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./page.module.css";
import UserCard from "@/components/user-card";
import Loading from "@/components/loading";

import { UserWithMemberships } from "@/types";

export default function Users() {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserWithMemberships[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) throw new Error("Failed to fetch users");

        const data = (await response.json()) as UserWithMemberships[];
        setUsers(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setLoading(false);
        }
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box p="4">
      <Heading mb="2" size="4">
        Users
      </Heading>
      <Flex gap="3" direction="column">
        {users &&
          users?.map((user) => (
            <Box key={user.id}>
              <Link href={`/users/${user.id}`}>
                <UserCard user={user} />
              </Link>
            </Box>
          ))}
      </Flex>
    </Box>
  );
}
