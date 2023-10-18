import bagOutlineIcon from '@iconify/icons-basil/bag-outline'
import codeOutlineIcon from '@iconify/icons-solar/code-outline'
import contactCard24RegularIcon from '@iconify/icons-fluent/contact-card-24-regular'
import homeAngle2OutlineIcon from '@iconify/icons-solar/home-angle-2-outline'

export const NAVIGATION_MENUS = [
    {
        id: "home-page",
        icon: homeAngle2OutlineIcon,
        href: "/",
        name: 'Home',
    },
    {
        id: "skills-page",
        icon: codeOutlineIcon,
        href: "/skills",
        name: 'Skills',
    },
    {
        id: "works-page",
        icon: bagOutlineIcon,
        href: "/works",
        name: 'Works',
    },
    {
        id: "contact-page",
        icon: contactCard24RegularIcon,
        href: "/contact",
        name: 'Contact',
    },
];