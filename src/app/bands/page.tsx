"use client";
import { useEffect, useState } from "react";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./page.module.css";

import Loading from "@/components/loading";
import { Band } from "@prisma/client";
import BandCard from "@/components/band-card";

export default function Bands() {
  const [loading, setLoading] = useState<boolean>(true);
  const [bands, setBands] = useState<Band[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBands() {
      try {
        const response = await fetch("/api/bands");
        if (!response.ok) throw new Error("Failed to fetch bands");

        const data = (await response.json()) as Band[];
        setBands(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          setLoading(false);
        }
      }
    }

    fetchBands();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box p="4">
      <Heading mb="2" size="4">
        Bands
      </Heading>
      <Flex gap="3" direction="column">
        {bands &&
          bands?.map((band) => (
            <Box key={band.id}>
              <Link href={`/bands/${band.id}`}>
                <BandCard band={band} />
              </Link>
            </Box>
          ))}
      </Flex>
    </Box>
  );
}
