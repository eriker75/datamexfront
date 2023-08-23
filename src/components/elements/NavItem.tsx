import Link from "next/link";
import styles from './NavItem.module.scss';
import classNames from 'classnames/bind';
import { NavItemCI } from "@/models/interfaces/NavItem";

let cx = classNames.bind(styles);

export const NavItem = ({ text, link }: NavItemCI) => {
  return (
    <Link className={cx("nav-link", "color")} href={link}>
      {text}
    </Link>
  );
};
