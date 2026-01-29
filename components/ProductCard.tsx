import { motion } from "framer-motion";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="cursor-pointer w-full" onClick={() => onClick(product.id)}>
      <motion.div
        className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-6 w-full"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Primary image */}
        <motion.img
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Secondary image */}
        {product.images[1] && (
          <motion.img
            variants={{
              rest: { opacity: 0, scale: 1 },
              hover: { opacity: 1, scale: 1.05 },
            }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
            }}
            src={product.images[1]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        )}

        {/* CTA */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-4 left-0 w-full px-6 flex justify-center z-10"
        >
          <button className="w-full py-3 bg-white/95 backdrop-blur-sm text-[10px] uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors shadow-sm">
            Quick Shop
          </button>
        </motion.div>
      </motion.div>

      {/* Text */}
      <div className="flex justify-between items-start px-1">
        <div className="pr-4">
          <h3 className="text-[12px] uppercase tracking-widest font-medium mb-1">
            {product.name}
          </h3>
          <p className="text-[11px] text-neutral-400 uppercase tracking-widest">
            {product.category}
          </p>
        </div>
        <p className="text-[12px] font-light">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
