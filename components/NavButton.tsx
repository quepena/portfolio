
import Link from "next/link";
import { useRouter } from 'next/router'

const NavButton = (props: any) => {
    const router = useRouter();

    const isActive = router.asPath === (props.path === "/" ? "/" : props.path);

    return (
        <Link href={props.path}>
            <div className={`${isActive ? "menu-active" : 'menu-button'}`}>
                <span className="Label">{props.label}</span>
            </div>
        </Link>
    )
};

export default NavButton;