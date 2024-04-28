"use client";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn" href="/cart">
            <div className="flex flex-col items-center gap-1 cursor-pointer relative">
              <FaBasketShopping width={18} height={18} className="text-black" />
              <span className="font-bold text-[0.6rem] text-black">Basket</span>
              {mounted && items.length != 0 && (
                <div className="badge badge-secondary absolute left-6">
                  {items.reduce((a, c) => a + c.qty, 0)}{" "}
                </div>
              )}
            </div>
          </Link>
        </li>
        <li>
          <button className="btn btn-ghost rounded-btn" type="button">
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <FaUser width={18} height={18} className="text-black" />
              <span className="font-bold text-[0.6rem] text-black">
                Account
              </span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
