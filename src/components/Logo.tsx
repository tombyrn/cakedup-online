import Image from 'next/image';
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="-translate-y-40 md:scale-100">
      <div className=" w-36 h-36 ">

      <Image
        src="/logo.png"
        alt="Caked Up Logo"
        fill
        priority
      />
      </div>
    </Link>
  );
}
