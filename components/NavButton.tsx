
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";

const NavButton = (props: any) => {
    const router = useRouter();

    const [isOpened, setIsOpened] = useState(true)

    const click = () => {
        setIsOpened(true)

        const checkbox = document.getElementById(
            'checkbox',
        ) as HTMLInputElement | null;

        const timer = () => {
            checkbox!.checked = false;
        }

        if (checkbox != null) {
            if (isOpened === true) {
                window.setTimeout(timer, 1200);
            }
        }
    }

    const isActive = router.asPath === (props.path === "/" ? "/" : props.path);

    return (
        <Link href={props.path} type="button"
            onClick={click} className={`${isActive ? "menu-active" : 'menu-button'}`}>
            <span className="menu-label">{props.label}</span>
        </Link>
    )
};

export default NavButton;