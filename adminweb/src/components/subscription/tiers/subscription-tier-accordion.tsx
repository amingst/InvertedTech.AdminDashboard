import {
	AccordionItem,
	Accordion,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type SubscriptionTierAccordionProps = {
	tiers: {
		Name: string;
		Description: string;
		Color: string;
		AmountCents: number;
	}[];
};

export default function SubscriptionTierAccordion({
	tiers,
}: SubscriptionTierAccordionProps) {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>Subscription Tiers</AccordionTrigger>
				<AccordionContent className='space-y-2'>
					{tiers.map((tier, index) => (
						<Link href={'#'} key={index} className='my-auto'>
							<div className='bg-secondary  rounded-sm  h-7 m-2'>
								<p className='my-auto'>{tier.Name}</p>
							</div>
						</Link>
					))}
					<Button className='w-full'>Add</Button>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
