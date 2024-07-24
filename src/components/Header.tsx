import Link from "next/link";

export default function Header() {
   return (
      <header>
         <h1>Maxim Schoemaker</h1>
         <nav>
            <Link href="/">Portfolio</Link>
            {" "}
            <Link href="/about">About</Link>
         </nav>
      </header>
   )
}