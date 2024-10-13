import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react'
import FilterButton from '../buttons/FilterButton'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import { X } from 'lucide-react'
import useOutsideClick from '@/hooks/useOutsideClick'
import { useNavigate } from '@tanstack/react-router'
import useFilter from '@/hooks/useFilter'

interface DialogProps {
  headline: string
  fullUrlPath: string
  onApplyFilters: () => void;
  onResetFilters: () => void;
  children?: React.ReactNode;
}

const Dialog = forwardRef(({
  headline,
  fullUrlPath,
  onApplyFilters,
  onResetFilters,
  children,
}: DialogProps, ref: ForwardedRef<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate({ from: fullUrlPath })
  const dialogRef = useOutsideClick(() => handleClose())

  useImperativeHandle(ref, () => dialogRef.current)

  const {
    filters,
    tempFilters,
    resetFilters,
    resetTempFilters,
    applyStateToTags,
  } = useFilter();

  const handleSubmit = () => {
    applyStateToTags();
    onApplyFilters();
    setIsOpen(false);
    setIsOpen(false);

    navigate({
      search: () => ({
        status: tempFilters.statusTags.length > 0 ? tempFilters.statusTags : undefined,
        region: tempFilters.regionTags.length > 0 ? tempFilters.regionTags : undefined,
      }),
    })
  };

  const handleReset = () => {
    onResetFilters();
    resetFilters();
    setIsOpen(false);
    navigate({ search: () => ({}) })
  }

  const handleClose = () => {
    setIsOpen(false);
    resetTempFilters();
  }

  return (
    <div className="font-nunito-sans text-base">
      <div className={`bg-dark-900/90 fixed inset-0 z-[1000] ${isOpen ? 'block' : 'hidden'}`}></div>

      <FilterButton
        activeCount={
          filters.statusTags.length + filters.regionTags.length
        }
        ariaLabel={headline}
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true)
        }}
      />

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className={`fixed max-h-[80dvh] overflow-y-auto z-[1010] inset-x-4 shadow-xl bg-white top-1/2 -translate-y-1/2 p-5 rounded-xl mx-auto max-w-[30rem] ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex items-center justify-between gap-x-5 mb-5">
          <h2 className="text-xl font-lato font-semibold">{headline}</h2>
          <button
            aria-label="Close Dialog"
            className="text-dark-400 hover:text-dark-600 stroke-1"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>

        {children}

        <div className="flex flex-wrap gap-5 mt-6">
          <PrimaryButton
            label="Anwenden"
            type="button"
            onClick={handleSubmit}
          />
          <SecondaryButton label="Zurücksetzen" onClick={handleReset} />
        </div>
      </section>
    </div>
  );
});

export default Dialog
