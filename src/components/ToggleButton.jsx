import { Check, X } from "lucide-react"

const ToggleButton = ({completed, onToggle} = props) => {
  return (
    <button
        onClick={onToggle}
        className="relative size-6 cursor-pointer"
    >
    {/* Галочка */}
    <Check
        className={`
        absolute inset-0
        text-success
        transition-all duration-300 ease-in-out
        hover:scale-[120%]
        active:scale-100
        ${
            completed
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-75 pointer-events-none rotate-90"
        }
        `}
    />

    {/* Крест */}
    <X
        className={`
        absolute inset-0
        text-danger
        transition-all duration-300 ease-in-out
        hover:scale-[120%]
        active:scale-100
        ${
            completed
            ? "opacity-0 scale-75 pointer-events-none -rotate-90"
            : "opacity-100 scale-100 pointer-events-auto"
        }
        `}
    />
    </button>
  )
}

export default ToggleButton
