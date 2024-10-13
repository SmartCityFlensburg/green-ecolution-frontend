import { MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Modal from '../general/Modal'
import useToast from '@/hooks/useToast'
import { LinkProps, useNavigate } from '@tanstack/react-router'

interface DeleteSectionProps {
  mutationFn: () => Promise<unknown>
  entityName: string
  redirectUrl: LinkProps
}

const DeleteSection: React.FC<DeleteSectionProps> = ({
  mutationFn,
  entityName,
  redirectUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const [displayError, setDisplayError] = useState<string | null>(null)
  const showToast = useToast()

  const { mutate, isError } = useMutation({
    mutationFn,
    onSuccess: () => {
      setIsModalOpen(false)
      navigate(redirectUrl)
      showToast(`${entityName.charAt(0).toUpperCase()}${entityName.slice(1)} wurde erfolgreich gelöscht.`)
    },
    onError: (error: unknown) => {
      error instanceof Error
        ? setDisplayError(error.message)
        : setDisplayError('Leider ist ein Fehler aufgetreten')
      console.error(error)
      setIsModalOpen(false)
    },
  })

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-10 group flex items-center gap-x-2 text-red font-medium text-base mb-4"
      >
        Löschen
        <MoveRight className="w-4 h-4 transition-all ease-in-out duration-300 group-hover:translate-x-1" />
      </button>

      {isError && (
        <p className="text-red mt-2 font-semibold text-sm">
          {displayError || 'Es ist leider ein Fehler aufgetreten.'}
        </p>
      )}

      <Modal
        title={`Soll ${entityName} wirklich gelöscht werden?`}
        description={`Sobald ${entityName} gelöscht wurde, können die Daten nicht wieder hergestellt werden.`}
        confirmText="Wirklich löschen"
        onConfirm={() => mutate()}
        onCancel={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </>
  )
}

export default DeleteSection
