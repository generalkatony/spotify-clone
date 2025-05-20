import { User } from "@supabase/auth-helpers-nextjs";
import { UserDetails } from "../../../types";
import { Subscription } from "@supabase/auth-js";
import { createContext } from "vm";


type UserContextType = {
    accessToken: string | null;
    user: User | null;
    userDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subscription | null;
}

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string]: any;
}