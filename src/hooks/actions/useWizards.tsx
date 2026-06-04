import endPoints from "../../config/endPoints";
import { queryKeys } from "../../config/query_keys";
import { useGetData } from "../curdsHook/useGetData";

interface Params {
  FirstName?: string;
}

export const useWizards = (params?: Params) => {
  const { data, isPending, error } = useGetData({
    url: endPoints.getAllWizards,
    queryKeys: [queryKeys.wizards, params],
    params: params as Record<string, string>,
  });
  return { data, isPending, error };
};
