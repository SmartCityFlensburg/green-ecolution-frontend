import { createFileRoute } from '@tanstack/react-router'
import { clusterApi, EntitiesTreeSoilCondition, infoApi } from '@/api/backendApi'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAuthHeader } from '@/hooks/useAuthHeader';
import { zodResolver } from '@hookform/resolvers/zod';
import useStore from '@/store/store';
import { useEffect, useMemo, useState } from 'react';
import { TreeclusterForm, TreeclusterSchema } from '@/schema/treeclusterSchema';
import FormForTreecluster from '@/components/general/form/FormForTreecluster';

export const Route = createFileRoute('/_protected/treecluster/new')({
  component: NewTreecluster,
})

function NewTreecluster() {
  const authorization = useAuthHeader();
  const clusterState = useStore((state) => state.treecluster);
  const [displayError, setDisplayError] = useState(false);

  const defaultValues = useMemo(() => ({
    name: clusterState.name || '',
    address: clusterState.address || '',
    description: clusterState.description || '',
    soilCondition: clusterState.soilCondition || EntitiesTreeSoilCondition.TreeSoilConditionUnknown,
  }), [clusterState]);

  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<TreeclusterForm>({
    resolver: zodResolver(TreeclusterSchema()),
    defaultValues,
  });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit: SubmitHandler<TreeclusterForm> = async (data) => {
    try {
      setDisplayError(false);
  
      const clusterData = {
        ...data,
        treeIds: clusterState.treeIds,
      };
      
      const response = await clusterApi.createTreeCluster({
        authorization,
        body: clusterData,
      });

      // TODO: navigate to overview and show success toast
      console.log('Tree cluster created:', response);
    } catch (error) {
      setDisplayError(true);
      console.error('Failed to create tree cluster:', error);
    }
  };

  const handleDeleteTree = (treeIdToDelete: number) => {
    clusterState.setTreeIds(clusterState.treeIds.filter((treeId) => treeId !== treeIdToDelete));
  };

  const storeState = () => {
    const formData = getValues();
    clusterState.setName(formData.name);
    clusterState.setAddress(formData.address);
    clusterState.setSoilCondition(formData.soilCondition);
    clusterState.setDescription(formData.description);
  };
  
  return (
    <div className="container mt-6">
      <article className="2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Neue Bewässerungsgruppe erstellen
        </h1>
        <p className="mb-5">
          Labore est cillum aliqua do consectetur. 
          Do anim officia sunt magna nisi eiusmod sit excepteur qui aliqua duis irure in cillum cillum. 
        </p>
      </article>

      <section className="mt-10">
        <FormForTreecluster
          register={register}
          handleDeleteTree={handleDeleteTree}
          handleSubmit={handleSubmit}
          displayError={displayError}
          errors={errors}
          onSubmit={onSubmit}
          treeIds={clusterState.treeIds} 
          storeState={storeState} />
      </section>
    </div>
  );
}

export default NewTreecluster;
