import Link from "next/link";
import { NavItemCI } from "@/interfaces/components/elements/NavItem";
import styles from './NavItem.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export const NavItem = ({ text, link }: NavItemCI) => {
  return (
    <Link className={cx("nav-link", "color")} href={link}>
      {text}
    </Link>
  );
};
