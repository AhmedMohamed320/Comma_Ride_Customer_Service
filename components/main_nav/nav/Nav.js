import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { BsListNested } from "react-icons/bs";
import Link from "next/link";

const Nav = (props) => {
    const pathname = usePathname();
    // -----------
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsFixed(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const navClass = `${classes.section}  ${
        isFixed ? `${classes.onScroll}` : ""
    }`;

    // -----------------

    return (
        <section className={navClass}>
            <div className="mainContainer w-full">
                <Link href="/" className={classes.logo}>
                    <img src="/image/ride_logo_1.png" alt="ride_logo" />
                </Link>
                <div className={classes.list}>
                    <ul className="md:flex hidden items-center gap-8">
                        <li>
                            <Link href="/">الرئيسيه</Link>
                        </li>
                        <li>
                            <Link href="/Orders">الطلبات</Link>
                        </li>
                        <li>
                            <Link href="/Create_an_order">عمل طلب</Link>
                        </li>
                    </ul>
                </div>
                <div className={`md:flex hidden ${classes.btn}`}>
                    <div className="flex gap-4 items-center">
                        <Link href="/User_Profile">
                            <span className="text-2xl text-zinc-50">
                                احمد محمد
                            </span>
                        </Link>
                        <Link href="/sign_in">تسجيل الخروج</Link>
                    </div>
                </div>
                <div className={`md:hidden`}>
                    <BsListNested
                        className="text-5xl cursor-pointer text-white"
                        onClick={props.onShowAside}
                    />
                </div>
            </div>
        </section>
    );
};

export default Nav;
