"use client";
import useCartService from "@/lib/hooks/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";

const Menu = () => {
  const { items } = useCartService();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const signoutHandler = () => {
    signOut({ callbackUrl: "/signin" });
  };

  const { data: session } = useSession();

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
        {session && session.user ? (
          <>
            <li>
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  {session.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 "
                >
                  <li>
                    <button type="button" onClick={signoutHandler}>
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </>
        ) : (
          <li>
            <button
              className="btn btn-ghost rounded-btn"
              type="button"
              onClick={() => signIn()}
            >
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <FaUser width={18} height={18} className="text-black" />
                <span className="font-bold text-[0.6rem] text-black">
                  Account
                </span>
              </div>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
