import Stripe from "stripe";

export interface UserDetails {
    id:string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Price {
    id: string;
    active?: string;
    name?: string;
    description?: string;
    image?: string;
    metadata?: Stripe.Metadata;
}

export interface Subscriptions {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    quantity?: number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    trial_end?: string;
    prices?: Price; 
}