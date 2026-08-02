export interface NavLink {
    key: string;
    href: string;
    label: string;
}

export interface NavGroup {
    key: string;
    label: string;
    children: readonly NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const NAV_LINKS = [
    { key: 'project', href: '/index.html', label: 'The Project' },
    { key: 'events', href: '/events.html', label: 'Events' },
    { key: 'team', href: '/team.html', label: 'Our Team' },
    { key: 'work', href: '/work.html', label: 'Our Work' },
    { key: 'localization', href: '/localization.html', label: 'Localization' },
    {
        key: 'communityLocalization',
        href: '/community-localization.html',
        label: 'Community Localization',
    },
    {
        key: 'tutorialCollection',
        href: '/tutorial-collection.html',
        label: 'Slicer Tutorial Maker Collection',
    },
    { key: 'participants', href: '/participants.html', label: 'Participants' },
    { key: 'acknowledgment', href: '/sponsors.html', label: 'Acknowledgment' },
    { key: 'contact', href: '/contact.html', label: 'Contact' },
] as const satisfies readonly NavLink[];

export type NavKey = (typeof NAV_LINKS)[number]['key'];

function byKey(key: NavKey): NavLink {
    const link = NAV_LINKS.find((item) => item.key === key);
    if (!link) {
        throw new Error(`Unknown nav key: ${key}`);
    }
    return link;
}

export const PRIMARY_NAV: readonly NavItem[] = [
    byKey('project'),
    byKey('events'),
    byKey('team'),
    byKey('work'),
    {
        key: 'resources',
        label: 'Resources',
        children: [
            byKey('localization'),
            byKey('communityLocalization'),
            byKey('tutorialCollection'),
        ],
    },
    byKey('acknowledgment'),
    byKey('contact'),
];

export function isGroup(item: NavItem): item is NavGroup {
    return 'children' in item;
}

export const FOOTER_SECTIONS = [
    {
        key: 'about',
        links: [byKey('project'), byKey('work'), byKey('team'), byKey('acknowledgment')],
    },
    {
        key: 'resources',
        links: [byKey('localization'), byKey('communityLocalization'), byKey('tutorialCollection')],
    },
    {
        key: 'community',
        links: [byKey('events'), byKey('contact')],
    },
] as const;
