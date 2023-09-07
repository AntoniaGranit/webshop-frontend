import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
      <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/productlist">Plants</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    )
  }
  
  export default NavBar