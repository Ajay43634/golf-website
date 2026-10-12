'use client'

interface QuantityInputProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}

export default function QuantityInput({ value, onChange, min = 1, max = 99 }: QuantityInputProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Quantity</label>
      <div className="flex items-center gap-0 border border-gray-300 rounded-lg w-fit overflow-hidden">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="px-4 py-2.5 text-lg font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
        >
          −
        </button>
        <span className="px-5 py-2.5 text-sm font-semibold text-gray-900 min-w-[3rem] text-center border-x border-gray-300">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="px-4 py-2.5 text-lg font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  )
}
