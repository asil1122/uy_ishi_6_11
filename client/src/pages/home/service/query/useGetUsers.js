import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => request.get('/products').then((res) => res.data)
    })
}
