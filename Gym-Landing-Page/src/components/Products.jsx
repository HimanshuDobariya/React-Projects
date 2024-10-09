import React, { useState } from "react";
import { productsData } from "../data/Data";
import { motion } from "framer-motion";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? productsData
      : productsData.filter((product) => product.category === activeTab);

  return (
    <div className="container my-12 md:my-16">
      <div className="flex items-center gap-4 mb-8">
        {tabs.map((tab) => {
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-primary hover:text-white
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            key={card.id}
            className="p-4 rounded-lg  shadow-[0_0_22px_0_rgba(0,0,0,0.15)] space-y-2"
          >
            <img
              src={card.image}
              alt=""
              className="h-[250px] w-full object-cover"
            />
            <p className="text-xl font-semibold">{card.title}</p>
            <p className="text-gray-500">{card.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
