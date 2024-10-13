import { createFileRoute } from '@tanstack/react-router'
import GeneralStatusCard from '@/components/general/cards/GeneralStatusCard'
import PrimaryButton from '@/components/general/buttons/PrimaryButton'
import { useState } from 'react'
import FileUpload from '@/components/general/form/types/FileUpload'
import Modal from '@/components/general/Modal'
import { useSuspenseQuery } from '@tanstack/react-query'
import { treeQuery } from '@/api/queries'

export const Route = createFileRoute('/_protected/settings/import')({
  component: ImportFile,
  meta: () => [{ title: 'Bäume importieren' }],
})

function ImportFile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const {data: trees} = useSuspenseQuery(treeQuery())

  const getReadonlyTreesLength = () => {
    const readonlyTrees = trees.data.filter((tree) => tree.readonly)
    return readonlyTrees.length
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    if (event.target.files.length === 0) setFile(null)

    const file = event.target.files[0]
    if (file.type !== 'text/csv') {
      setMessage('Es sind nur CSV-Dateien erlaubt.')
      return
    }

    setFile(event.target.files[0])
  }

  const handleConfirm = async () => {
    setIsModalOpen(false)

    try {
      if (!file) return

      setMessage('')
      const formData = new FormData()
      formData.append('file', file)

      // TODO: Send form to provided endpoint of backend client

      setFile(null)
      setMessage('Es wurden erfolgreich neue Daten importiert.')
    } catch (error: unknown) {
      console.error(error)
      setMessage(String(error))
    }
  }

  // TODO: use real date of import
  const cards = [
    {
      headline: 'Anzahl der importierten Bäume',
      value: `${getReadonlyTreesLength()} Bäume`,
      description:
        'Diese Bäume wurden aus einer CSV Datei importiert und nicht im System manuell eingepflegt.',
    },
    {
      headline: 'Anzahl der manuell eingepflegten Bäume',
      value: `${trees.data.length - getReadonlyTreesLength()} Bäume`,
      description: 'Diese Bäume wurden manuell im System eingepflegt.',
    },
    {
      headline: 'Datum des letzten Imports',
      value: '20.05.2024',
      description:
        'Am 20.05.2024 wurde das letzte Mal die Bäume anhand einer CSV Datei importiert.',
    },
  ]

  return (
    <div className="container mt-6">
      <article className="2xl:w-4/5">
        <h1 className="font-lato font-bold text-3xl mb-4 lg:text-4xl xl:text-5xl">
          Kataster neu importieren
        </h1>
        <p>
          Qui voluptate dolore amet sunt elit dolor in anim consequat laborum
          ipsum est adipisicing Lorem fugiat. Reprehenderit duis velit
          adipisicing incididunt veniam reprehenderit sit id sunt. Ut magna
          dolore nulla reprehenderit culpa anim tempor. Mollit laborum officia
          commodo mollit dolor deserunt qui occaecat anim.
        </p>
      </article>

      <ul className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, key) => (
          <li key={key}>
            <GeneralStatusCard
              overline={card.headline}
              value={card.value}
              description={card.description}
            />
          </li>
        ))}
      </ul>

      <div className="mt-16">
        <h2 className="text-xl font-bold font-lato mb-4">
          Import neu anstoßen:
        </h2>
        <p className="block text-base text-dark-700 mb-2">
          CSV-Datei mit aktuellen Bäumen:
        </p>
        <form className="w-full flex flex-col justify-center">
          <FileUpload
            name="import_file"
            fileType=".csv"
            message={message}
            handleFileChange={handleFileChange}
            showDeleteButton={file !== null}
            clearFileInput={() => setFile(null)}
          />
        </form>

        <PrimaryButton
          onClick={() => setIsModalOpen(true)}
          disabled={!file}
          className="mt-10"
          label="Daten importieren"
        />

        <Modal
          title="Soll der Import wirklich neu angestoßen werden?"
          description="Der Import kann etwas länger dauern, sodass die Website für einen Moment in den Wartungsmodus schaltet und nicht erreichbar ist."
          confirmText="Import fortfahren"
          onConfirm={handleConfirm}
          onCancel={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        />
      </div>
    </div>
  )
}
