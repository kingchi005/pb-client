import { useQuery } from "@tanstack/react-query"
import { getCompetitions } from "../axios/requests"

export function useCompetitions() {
return useQuery(
    {queryKey: ['competition'], queryFn: getCompetitions}
)
   
}
