type ProductCardProps = {
  title: string
  price: string
  image: string
  buttonText?: string
  badge?: string
}

export default function ProductCard({
  title,
  price,
  image,
  buttonText = "Tải về",
  badge,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#031a2d] shadow-md transition hover:-translate-y-1 hover:shadow-cyan-500/10">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-cyan-500/20 bg-[#07243d]">
        {badge && (
          <div className="absolute right-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        )}

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="min-h-[84px] text-[22px] font-extrabold uppercase leading-snug text-white">
          {title}
        </h3>

        <p className="mt-3 text-[30px] font-extrabold text-cyan-400">
          {price}
        </p>

        <button className="mt-5 w-full rounded-full bg-cyan-400 px-5 py-3 text-[18px] font-bold text-black transition hover:brightness-110">
          {buttonText}
        </button>
      </div>
    </div>
  )
}