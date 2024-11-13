import Link from "next/link"
export default function Navbar() {
    return (
        <div>
            <nav className="h-16 bg-purple-500 px-14 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-purple-950">
                        Saira Agha
                    </h1>
                </div>
                <div>
                    <ul className="flex space-x-14">
                        <li><Link href="/" className="hover:text-purple-950">Home</Link></li>
                        <li><Link href="/about" className="hover:text-purple-950">About</Link></li>
                        <li><Link href="/services" className="hover:text-purple-950">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-purple-950">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-5">
                        <li><Link href="#!" className="px-5 py-1 border border-purple-950 rounded-full hover:bg-purple-950 hover:text-white">Login</Link></li>
                        <li><Link href="#!" className="px-5 py-1 border border-purple-950 rounded-full hover:bg-purple-950 hover:text-white">Signup</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}