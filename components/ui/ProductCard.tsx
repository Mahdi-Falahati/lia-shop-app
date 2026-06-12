import Link from "next/link"

type Props = {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link href={`/product/${id}`}>
        <div className="w-full h-56 bg-gray-100">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </Link>
      <div className="p-4 text-right">
        <h3 className="text-sm font-medium text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-brand">{price.toLocaleString()} تومان</span>
          <button className="bg-brand text-white px-3 py-1 rounded-md text-sm">افزودن</button>
        </div>
      </div>
    </article>
  )
}
