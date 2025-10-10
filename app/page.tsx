import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/login">Login</Link>
      <Link href="/project">Project</Link>
    </div>
  );
}
