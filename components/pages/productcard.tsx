import React from 'react';
import "../style.css"

interface CardProps {
  imgUrl: string;
  heading: string;
  text: string;
  buttonLabel: string;
}

const Card: React.FC<CardProps> = ({ imgUrl, heading, text, buttonLabel }) => (
  <div className="card bg-[f2f3f5] zmax-w-xs rounded-xl shadow-lg text-gray-700 mx-2 mb-20">
    <img className="h-48 w-full object-cover rounded-t-md" src={imgUrl} alt="Card Image" />
    <div className="pt-6 pb-10 px-8">
      <h1 className="font-sans text-lg text-gray-600 font-semibold pb-1">{heading}</h1>
      <hr className="w-50 pb-3" />
      <p className="text-md pb-5 font text-gray-600">{text}</p>
      <a className="text-md text-violet-600 " href="#">{buttonLabel}</a>
    </div>
  </div>
);

const cardsData = [
  {
    imgUrl: 'https://source.unsplash.com/category/abstract',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/maths',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/science',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/physics',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/data',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/computer',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
  {
    imgUrl: 'https://source.unsplash.com/category/AI',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  }, {
    imgUrl: 'https://source.unsplash.com/category/fiction',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  }, {
    imgUrl: 'https://source.unsplash.com/category/laptop',
    heading: 'Product',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    buttonLabel: 'Read more',
  },
];

const ProductCard: React.FC = () => {
  return (
    <div className="bg-[#f2f3f5] flex justify-center py-20 px-4 sm:px-40">
      <div className="max-w-screen-xl flex flex-wrap justify-between">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 mb-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductCard;
