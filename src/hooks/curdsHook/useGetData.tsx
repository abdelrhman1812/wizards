import { useQuery } from "@tanstack/react-query";

export const useGetData = ({ url, queryKeys, params = {} }) => {
  return useQuery({
    queryKey: [...queryKeys],
    queryFn: async () => {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${url}${query ? `?${query}` : ""}`,
      );
      console.log(res);
      if (!res.ok) throw new Error("something went wrong");
      return res.json();
    },
  });
};
