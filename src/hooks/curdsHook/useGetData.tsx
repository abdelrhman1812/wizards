import { useQuery, type QueryKey } from "@tanstack/react-query";
interface ParamsT {
  url: string;
  queryKeys: QueryKey;
  params?: Record<string, string>;
}
export const useGetData = ({ url, queryKeys, params = {} }: ParamsT) => {
  return useQuery({
    queryKey: queryKeys,
    queryFn: async () => {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${url}${query ? `?${query}` : ""}`,
      );
      if (!res.ok) throw new Error("something went wrong");
      return res.json();
    },
  });
};
