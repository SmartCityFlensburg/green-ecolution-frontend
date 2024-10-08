import { EntitiesWateringStatus, treeApi } from '@/api/backendApi';
import { useAuthHeader } from '@/hooks/useAuthHeader';
import { getWateringStatusDetails } from '@/hooks/useDetailsForWateringStatus';
import { useQuery } from '@tanstack/react-query';
import { Trash2 } from 'lucide-react';
import React from 'react';

interface SelectedCard {
  treeId: number;
  onClick: (treeId: number) => void;
}

const SelectedCard: React.FC<SelectedCard> = ({ onClick, treeId }) => {
  const authorization = useAuthHeader();
  const { data: tree } = useQuery({
    queryKey: ["tree", treeId],
    queryFn: () => treeApi.getTrees({ treeId: String(treeId), authorization }),
  });

  const statusDetails = getWateringStatusDetails(tree?.wateringStatus ?? EntitiesWateringStatus.WateringStatusUnknown);

  return (
    <div className="flex justify-between gap-x-6 bg-white border border-dark-50 shadow-cards px-4 py-3 rounded-lg">
      <h3 className={`relative font-medium pl-7 before:absolute before:w-4 before:h-4 before:rounded-full before:left-0 before:top-[0.22rem] before:bg-${statusDetails.color}`}>
        <strong className="font-semibold">Baum:</strong> {tree?.species} · {treeId} · {tree?.plantingYear}
      </h3>
      <button
        onClick={() => onClick(treeId)}
        className="text-dark-600"
      >
        <Trash2 className="w-5 h-5" />
        <span className="sr-only">Baum aus Auswahl löschen</span>
      </button>
    </div>
  );
}

export default SelectedCard;
