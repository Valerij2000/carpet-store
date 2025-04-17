export default function FilterPanel({ setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))} className="p-2 border rounded">
        <option value="">Размер</option>
        <option value="160x230">160x230</option>
        <option value="200x300">200x300</option>
      </select>

      <select onChange={(e) => setFilters(prev => ({ ...prev, material: e.target.value }))} className="p-2 border rounded">
        <option value="">Материал</option>
        <option value="Шерсть">Шерсть</option>
        <option value="Хлопок">Хлопок</option>
      </select>

      <select onChange={(e) => setFilters(prev => ({ ...prev, color: e.target.value }))} className="p-2 border rounded">
        <option value="">Цвет</option>
        <option value="Красный">Красный</option>
        <option value="Бежевый">Бежевый</option>
      </select>
    </div>
  )
}