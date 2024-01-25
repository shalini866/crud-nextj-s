import { Button } from "@nextui-org/react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/list">
      <Button size="sm" color="primary">Go To TO-Do Page</Button>
      </Link>
    </main>

    
  );
}

