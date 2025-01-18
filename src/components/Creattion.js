import React, { useState } from "react";
import "../styles/Creattion.css";
import { Link } from 'react-router-dom'
import modelImages from './assets/ModelImages'
import cardData from './assets/cardData'

const Creattion = () => {
  const [activeCategory, setActiveCategory] = useState("All");


  // Filter logic based on active category
  const filteredImages =
    activeCategory === "All"
      ? modelImages
      : modelImages.filter((image) => image.category === activeCategory);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="model">
      <div className="inner-model">
        {/* Header Section */}
        <div className="model-text">
          <div>
            <h2>Create Your Own Creations</h2>
            <p>
              Craft your personalized designs with unique styles and vibrant
              ideas.
            </p>
          </div>
          <p className="link">See All Styles</p>
        </div>

        {/* Grid Section */}
        <div className="model-grid">
          {cardData.map((card) => (
            <div className="model-cards" key={card.id}>
              <img src={card.imgSrc} alt={card.title} />
              <div className="model-info">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="model-text">
          <div>
            <h2>Explore & Remix</h2>
            <p>Discover the best AI-generated artwork made using Starrai.</p>

            <div className="model-btn-charactors">
              {[
                "All",
                "Characters",
                "Photography",
                "Illustrations",
                "Portraits",
                "Landscape",
                "Animals",
                "Anime",
                "Architecture",
                "Vehicles",
                "Food",
                "Interior",
              ].map((category) => (
                <button
                  key={category}
                  className={`btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="generated-models">
              {filteredImages.map((model) => (
                <div key={model.id} className="model-image">
                  <img src={model.modelSrc} alt={`Model ${model.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creattion;