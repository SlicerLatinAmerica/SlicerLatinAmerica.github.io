export interface NavLink {
    key: string;
    href: string;
    label: string;
}

export const NAV_LINKS = [
    { key: 'project', href: 'index.html', label: 'The Project' },
    { key: 'events', href: 'events.html', label: 'Events' },
    { key: 'team', href: 'team.html', label: 'Our Team' },
    { key: 'work', href: 'work.html', label: 'Our Work' },
    { key: 'localization', href: 'localization.html', label: 'Localization' },
    {
        key: 'communityLocalization',
        href: 'community-localization.html',
        label: 'Community Localization',
    },
    {
        key: 'tutorialCollection',
        href: 'tutorial-collection.html',
        label: 'Slicer Tutorial Maker Collection',
    },
    { key: 'acknowledgment', href: 'sponsors.html', label: 'Acknowledgment' },
    { key: 'contact', href: 'contact.html', label: 'Contact' },
] as const satisfies readonly NavLink[];

export type NavKey = (typeof NAV_LINKS)[number]['key'];
