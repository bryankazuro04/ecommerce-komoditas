"use client";

// import { Home } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import LayerIcon from "@mui/icons-material/Layers";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Pages",
    href: "/pages",
    icon: LayerIcon,
  },
  {
    name: "Feature1",
    href: "/feature",
    icon: LayerIcon,
  },
  {
    name: "Feature2",
    href: "/feature",
    icon: LayerIcon,
  },
  {
    name: "Feature3",
    href: "/feature",
    icon: LayerIcon,
  },
  {
    name: "Feature4",
    href: "/feature",
    icon: LayerIcon,
  },
  {
    name: "Feature5",
    href: "/feature",
    icon: LayerIcon,
  },
];

export default function Navlink() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-blue-300 hover:text-sky-700", {
              "bg-sky-100 text-blue-600": pathName === link.href,
            })}
          >
            <LinkIcon />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
