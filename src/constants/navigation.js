import { FaHome } from "react-icons/fa";
import { PiTelevisionBold } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa6";

export const navigation = [
    {
        label: 'Tv Shows',
        href: '/tv',
        icon: <PiTelevisionBold/>
    },
    {
        label: 'Movies',
        href: '/movies',
        icon: <MdLocalMovies/>
    },
]

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon: <FaHome/>
    },
    ...navigation,
    {
        label: "Search",
        href: '/search',
        icon: <FaSearchengin/>
    }
]