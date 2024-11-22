import ShallLayout from "@/app/shell"
import Image from "next/image";

import logo from '../../assets/images/logo.svg'
import Link from "next/link";
import { Navigation } from "../nav/Navigation";

export const Header = () => {
    return <header className="z-50 sticky top-0 bg-white">
        <ShallLayout>
            <div className="logo">
                <Link href={'/'}>
                    <Image src={logo} alt={'logo'} />
                </Link>
            </div>
            <Navigation />
        </ShallLayout>
    </header>
}