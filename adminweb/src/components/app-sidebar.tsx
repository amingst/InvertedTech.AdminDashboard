'use client';

import * as React from 'react';
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Map,
	PieChart,
	Settings2,
	SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavSettings } from '@/components/nav-settings';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	navMain: [
		{
			title: 'CMS',
			url: '/cms',
			icon: Settings2,
			items: [],
		},
		{
			title: 'Pages',
			url: '/pages',
			icon: Settings2,
			items: [],
		},
		{
			title: 'Users',
			url: '/users',
			icon: Settings2,
			items: [],
		},
	],
	settings: [
		{
			name: 'CMS',
			url: '/settings/cms',
			icon: Frame,
		},
		{
			name: 'Comments',
			url: '/settings/comments',
			icon: PieChart,
		},
		{
			name: 'Personalization',
			url: '/settings/personalization',
			icon: Map,
		},
		{
			name: 'Subscription',
			url: '/settings/subscription',
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSettings settings={data.settings} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
