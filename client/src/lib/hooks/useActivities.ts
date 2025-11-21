import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import agent from "../api/agent";

export const useActivities = () => {
    const queryClient = useQueryClient();

    const {data: activities, isPending} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        }
    });

    const updateActivity = useMutation({
        mutationKey: ['updateActivity'],
        mutationFn: async (activity: Activity) => {
            await agent.put('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })
    const createActivity = useMutation({
        mutationKey: ['updateActivity'],
        mutationFn: async (activity: Activity) => {
            await agent.post('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })
    const deleteActivity = useMutation({
        mutationKey: ['updateActivity'],
        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}`)
        },
        onSuccess: async () => {    // changed invalid and get data from api
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            })
        }
    })

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity
  }
}