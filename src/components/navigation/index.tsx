import { TabNav } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <TabNav.Root className={styles.navigation}>
      <TabNav.Link asChild>
        <Link href="/users">Users</Link>
      </TabNav.Link>
      <TabNav.Link asChild>
        <Link href="/bands">Bands</Link>
      </TabNav.Link>
    </TabNav.Root>
  );
}
