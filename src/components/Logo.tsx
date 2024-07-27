import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="-translate-y-20">
      <Image
        src="/cakelogo.png"
        alt="Caked Up Logo"
        width={175}
        height={150}
        
        priority
      />
    </Link>
  );
}
