import { DefaultValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TreeclusterForm, TreeclusterSchema } from "@/schema/treeclusterSchema";
import { useEffect } from "react";
import useStore from "@/store/store";
import { EntitiesTreeSoilCondition } from "@green-ecolution/backend-client";

type AsyncDefaultValues<T> = (payload?: unknown) => Promise<T>;

export const useTreeClusterForm = (
  defaultValues?:
    | DefaultValues<TreeclusterForm>
    | AsyncDefaultValues<TreeclusterForm>,
) => {
  const { cache } = useStore((state) => ({
    cache: state.form.treecluster.cache,
  }));

  const form = useForm<TreeclusterForm>({
    resolver: zodResolver(TreeclusterSchema()),
    defaultValues,
  });

  useEffect(() => {
    const { unsubscribe } = form.watch((value) => {
      console.log(value);
      cache({
        name: value.name ?? "",
        address: value.address ?? "",
        description: value.description ?? "",
        soilCondition:
          value.soilCondition ??
          EntitiesTreeSoilCondition.TreeSoilConditionUnknown,
      });
    });

    return () => unsubscribe();
  }, [form.watch]);

  return form;
};
