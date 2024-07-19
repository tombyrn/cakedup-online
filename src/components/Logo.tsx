import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/cakelogo.png"
        alt="Caked Up Logo"
        width={175}
        height={150}
        className="-translate-y-20"
        priority
      />
    </Link>
  );
}
