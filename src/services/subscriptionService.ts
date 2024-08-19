import { Subscription } from "../types";

const BASE_URL = 'http://13.201.6.111/api';

// export const fetchSubscriptions = async (type: string): Promise<Subscription[]> => {
//     const response = await fetch(`${BASE_URL}/subscriptionType/${type}`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch subscriptions');
//     }
//     return response.json();
// };

export const fetchSubscriptions = async (type: string): Promise<Subscription[]> => {
    let url = `${BASE_URL}/subscriptionType/${type}`;
    if (type === 'lifetime') {
        url = `${BASE_URL}/subscriptions/all`; // Change URL for 'lifetime'
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch subscriptions');
    }
    return response.json();
};
