'use client'

interface SizeSelectorProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export default function SizeSelector({ label, options, value, onChange }: SizeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt === value ? '' : opt)}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors ${
              value === opt
                ? 'bg-green-800 text-white border-green-800'
                : 'bg-white text-gray-700 border-gray-300 hover:border-green-600 hover:text-green-700'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
