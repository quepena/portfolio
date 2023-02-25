
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
          
          if (checkbox != null) {
            if(isOpened === true) {
                checkbox.checked = false;
            }
          }
    }

    const isActive = router.asPath === (props.path === "/" ? "/" : props.path);

    return (
        <Link href={props.path} type="button"
            onClick={click}>
            <div className={`${isActive ? "menu-active" : 'menu-button'}`}>
                <span className="Label">{props.label}</span>
            </div>
        </Link>
    )
};

export default NavButton;