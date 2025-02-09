import CryptoProviderForm from '@/components/settings/subscription/providers/crypto-provider-form';
import FakeProviderForm from '@/components/settings/subscription/providers/fake-provider-form';
import PaypalProviderForm from '@/components/settings/subscription/providers/paypal-provider-form';
import PEProviderForm from '@/components/settings/subscription/providers/pe-provider-form';
import StripeProviderForm from '@/components/settings/subscription/providers/stripe-provider-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SubscriptionProviderSettingsPage() {
	return (
		<Card className='w-1/3 space-y-4'>
			<CardTitle>Subscription Provider Settings</CardTitle>
			<CardDescription>
				Edit Your Payment Provider Configurations
			</CardDescription>
			<CardContent>
				<Tabs defaultValue='Fake'>
					<TabsList className='grid w-full grid-cols-5'>
						<TabsTrigger value='Fake'>Fake</TabsTrigger>
						<TabsTrigger value='PE'>Parallel Economy</TabsTrigger>
						<TabsTrigger value='Crypto'>Crypto</TabsTrigger>
						<TabsTrigger value='Stripe'>Stripe</TabsTrigger>
						<TabsTrigger value='Paypal'>Paypal</TabsTrigger>
					</TabsList>
					<Card>
						<TabsContent value='Fake'>
							<CardTitle>Fake Provider</CardTitle>
							<CardContent>
								<FakeProviderForm />
							</CardContent>
						</TabsContent>
						<TabsContent value='PE'>
							<CardTitle>Parallel Economy</CardTitle>
							<CardContent>
								<PEProviderForm />
							</CardContent>
						</TabsContent>
						<TabsContent value='Crypto'>
							<CardTitle>Crypto</CardTitle>
							<CardContent>
								<CryptoProviderForm />
							</CardContent>
						</TabsContent>
						<TabsContent value='Stripe'>
							<CardTitle>Stripe</CardTitle>
							<CardContent>
								<StripeProviderForm />
							</CardContent>
						</TabsContent>
						<TabsContent value='Paypal'>
							<CardTitle>Paypal</CardTitle>
							<CardContent>
								<PaypalProviderForm />
							</CardContent>
						</TabsContent>
					</Card>
				</Tabs>
			</CardContent>
		</Card>
	);
}
