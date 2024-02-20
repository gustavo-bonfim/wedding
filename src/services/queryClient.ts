// app/getQueryClient.jsx
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const getQueryClient = () => queryClient;
