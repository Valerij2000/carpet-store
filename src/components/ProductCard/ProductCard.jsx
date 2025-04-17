export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <img src={product.image} alt={product.name} className="rounded-lg mb-2" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.size} • {product.material} • {product.color}</p>
      <p className="font-bold text-lg mt-2">{product.price} ₽</p>
    </div>
  )
}