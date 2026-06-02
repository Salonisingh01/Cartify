// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { ArrowRight } from 'lucide-react'
// import { cn } from '@/lib/utils'

// const tiers = [
//     {
//         name: 'Hobby',
//         description: 'For personal projects',
//         price: '$0',
//         period: '/month',
//         limit: '1,000 requests/month',
//     },
//     {
//         name: 'Pro',
//         description: 'For professional use',
//         price: '$20',
//         period: '/month',
//         limit: '50,000 requests/month',
//         highlighted: true,
//     },
//     {
//         name: 'Scale',
//         description: 'For high-volume apps',
//         price: '$100',
//         period: '/month',
//         limit: '500,000 requests/month',
//     },
//     {
//         name: 'Enterprise',
//         description: 'For large organizations',
//         price: 'Custom',
//         period: '',
//         limit: 'Unlimited requests',
//     },
// ]

// export default function Pricing() {
//     return (
//         <section id="pricing" className="bg-background @container py-24">
//             <div className="mx-auto max-w-3xl px-6">
//                 <div className="text-center">
//                     <h2 className="text-balance font-serif text-4xl font-medium">Usage-Based Pricing</h2>
//                     <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Pay only for what you use. All plans include the same features.</p>
//                 </div>
//                 <div className="mt-12 space-y-3">
//                     {tiers.map((tier) => (
//                         <Card
//                             key={tier.name}
//                             variant="outline"
//                             className={cn('@2xl:flex-row @2xl:items-center @2xl:justify-between flex flex-col gap-4 p-4', tier.highlighted && 'ring-primary')}>
//                             <div className="@2xl:flex-row @2xl:items-center @2xl:gap-6 flex flex-col gap-2">
//                                 <div className="@2xl:w-44 shrink-0">
//                                     <h3 className="text-foreground font-medium">{tier.name}</h3>
//                                     <p className="text-muted-foreground text-sm">{tier.description}</p>
//                                 </div>
//                                 <div className="@2xl:border-l @2xl:pl-6">
//                                     <p className="text-muted-foreground text-sm">{tier.limit}</p>
//                                 </div>
//                             </div>
//                             <div className="@2xl:flex-row @2xl:items-center flex flex-col gap-4">
//                                 <div className="@2xl:text-right">
//                                     <span className="font-serif text-2xl font-medium">{tier.price}</span>
//                                     {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
//                                 </div>
//                                 <Button
//                                     asChild
//                                     variant={tier.highlighted ? 'default' : 'outline'}
//                                     size="sm"
//                                     className="gap-1">
//                                     <Link href="#link">
//                                         {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
//                                         <ArrowRight className="size-3.5" />
//                                     </Link>
//                                 </Button>
//                             </div>
//                         </Card>
//                     ))}
//                 </div>
//                 <div className="bg-muted mt-8 rounded-xl p-6 text-center">
//                     <p className="text-foreground font-medium">Need more requests?</p>
//                     <p className="text-muted-foreground mt-1 text-sm">Additional requests are billed at $0.001 per request after your plan limit.</p>
//                 </div>
//             </div>
//         </section>
//     )
// }

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const tiers = [
    {
        name: 'Hobby',
        description: 'For personal projects',
        price: '$0',
        period: '/month',
        limit: '1,000 requests/month',
    },
    {
        name: 'Pro',
        description: 'For professional use',
        price: '$20',
        period: '/month',
        limit: '50,000 requests/month',
    },
    {
        name: 'Scale',
        description: 'For high-volume apps',
        price: '$100',
        period: '/month',
        limit: '500,000 requests/month',
    },
    {
        name: 'Enterprise',
        description: 'For large organizations',
        price: 'Custom',
        period: '',
        limit: 'Unlimited requests',
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="bg-background @container py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Usage-Based Pricing</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Pay only for what you use. All plans include the same features.</p>
                </div>
                <div className="mt-12 space-y-4"> {/* Increased space-y slightly to give room for the pop effect */}
                    {tiers.map((tier) => (
                        <Card
                            key={tier.name}
                            variant="outline"
                            // 1. Added hover:-translate-y-1 and scale-[1.01] for the physical pop out effect
                            // 2. Used border-2 so the dark line appears distinct and matches your screenshot
                            className="@2xl:flex-row @2xl:items-center @2xl:justify-between flex flex-col gap-4 p-5 transition-all duration-300 border-2 hover:border-zinc-800 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 cursor-pointer group">
                            <div className="@2xl:flex-row @2xl:items-center @2xl:gap-6 flex flex-col gap-2">
                                <div className="@2xl:w-44 shrink-0">
                                    <h3 className="text-foreground font-medium">{tier.name}</h3>
                                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                                </div>
                                <div className="@2xl:border-l @2xl:pl-6 transition-colors duration-300 group-hover:border-zinc-800/30">
                                    <p className="text-muted-foreground text-sm">{tier.limit}</p>
                                </div>
                            </div>
                            <div className="@2xl:flex-row @2xl:items-center flex flex-col gap-4">
                                <div className="@2xl:text-right">
                                    <span className="font-serif text-2xl font-medium">{tier.price}</span>
                                    {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
                                </div>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="gap-1 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-zinc-50 dark:group-hover:bg-zinc-50 dark:group-hover:text-zinc-900">
                                    <Link href="#link">
                                        {tier.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                                        <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="bg-muted mt-8 rounded-xl p-6 text-center">
                    <p className="text-foreground font-medium">Need more requests?</p>
                    <p className="text-muted-foreground mt-1 text-sm">Additional requests are billed at $0.001 per request after your plan limit.</p>
                </div>
            </div>
        </section>
    )
}