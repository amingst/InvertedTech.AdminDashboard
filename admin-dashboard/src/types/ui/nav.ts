import { LucideProps } from 'lucide-react';

export type NavItem = {
	title: string;
	url: string;
};

export type NavSection = {
	title: string;
	url: string;
	icon: React.ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
	>;
	isActive?: boolean;
	items: NavItem[];
};
