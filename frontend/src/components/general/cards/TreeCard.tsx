import { getWateringStatusDetails } from '@/hooks/useDetailsForWateringStatus';
import { EntitiesWateringStatus, Tree } from '@green-ecolution/backend-client';
import { Link } from '@tanstack/react-router';
import { MoveRight } from 'lucide-react';
import React from 'react';
interface TreeCardProps {
  tree: Tree;
}

const TreeCard: React.FC<TreeCardProps> = ({ tree }) => {
  const statusDetails = getWateringStatusDetails(tree.wateringStatus ?? EntitiesWateringStatus.WateringStatusUnknown);
  const wrapperClasses = 'bg-white group border border-dark-50 p-6 rounded-xl shadow-cards flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr,2fr,1fr,1fr] lg:items-center lg:gap-5 lg:py-5 xl:px-10';

  return (
    <Link 
      to={`/tree/$treeId`}
      params={{ treeId: tree.id.toString() }}
      className={`transition-all ease-in-out duration-300 hover:bg-green-dark-50 hover:border-green-dark ${wrapperClasses}`}
    >
      <p className={`relative font-medium pl-7 before:absolute before:w-4 before:h-4 before:rounded-full before:left-0 before:top-[0.22rem] 
        before:bg-${statusDetails.color}`}>
        {statusDetails.label}
      </p>
      <h3 className="text-lg font-bold font-lato">{tree.species}</h3>
      {tree.treeNumber && 
        <p className="text-dark-700">
          <span className="lg:sr-only">Baumnummer: </span>{tree.treeNumber}
        </p>
      }

      <p className="font-lato font-semibold text-green-dark flex items-center gap-x-2">
        <span>Zur Detailansicht</span>
        <MoveRight className="transition-all ease-in-out duration-300 group-hover:translate-x-2"/>
      </p>
    </Link>
  );
}

export default TreeCard;
