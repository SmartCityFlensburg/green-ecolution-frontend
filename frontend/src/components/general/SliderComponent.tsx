import React from 'react'

interface SliderProps {
  min: number
  max: number
  step?: number
  value: number
  onChange: (value: number) => void
}

const SliderComponent: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="h-2 bg-green-dark h-2 bg-green-light-200 rounded-lg appearance-none cursor-pointer range-lg"
      />
      <p>{value}</p>
    </div>
  )
}

export default SliderComponent
