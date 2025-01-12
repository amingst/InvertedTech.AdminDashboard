'use client';

import * as React from 'react';
import {
	Command,
	HandCoinsIcon,
	LayoutTemplateIcon,
	MessageSquareDotIcon,
	MessageSquareTextIcon,
	PaintbrushVerticalIcon,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavSecondary } from './nav-secondary';

const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	navMain: [
		{
			title: 'CMS',
			url: '/cms',
			icon: LayoutTemplateIcon,
			isActive: true,
			items: [
				{
					title: 'Articles',
					url: '/cms/articles',
				},
				{
					title: 'Channels',
					url: '/cms/channels',
				},

				{
					title: 'Categories',
					url: '/cms/categories',
				},
				{
					title: 'Pages',
					url: '/cms/pages',
				},
				{
					title: 'Settings',
					url: '/cms/settings',
				},
			],
		},
		{
			title: 'Subscription',
			url: '/subscription',
			icon: HandCoinsIcon,
			isActive: false,
			items: [
				{
					title: 'Fake',
					url: '/subscription/fake',
				},
				{
					title: 'ParalellEconomy',
					url: '/subscription/paralell-economy',
				},
				{
					title: 'Crypto',
					url: '/subscription/crypto',
				},

				{
					title: 'Stripe',
					url: '/subscription/stripe',
				},

				{
					title: 'Paypal',
					url: '/subscription/paypal',
				},
			],
		},
	],
	navSecondary: [
		{
			title: 'Personalization',
			url: '/',
			icon: PaintbrushVerticalIcon,
		},
		{
			title: 'Comments',
			url: '/',
			icon: MessageSquareTextIcon,
		},
		{
			title: 'Notification',
			url: '/',
			icon: MessageSquareDotIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant='inset' {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size='lg' asChild>
							<a href='#'>
								<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
									<Command className='size-4' />
								</div>
								<div className='grid flex-1 text-left text-sm leading-tight'>
									<span className='truncate font-semibold'>
										Inverted Tech
									</span>
									<span className='truncate text-xs'>
										Admin Dashboard
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
