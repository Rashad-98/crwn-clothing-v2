import Directory from './components/directory/directory.component';
import CategoryItem from './components/category-item/category-item.component';

function App() {

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  return (
    
      <Directory categories={categories} />
  
    // <div className='categories-container'>
    //   <div className='category-container'>
    //     {/* <img /> */}
    //     <div className='category-body-container'>
    //       <h2>Hats</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className='category-container'>
    //     {/* <img /> */}
    //     <div className='category-body-container'>
    //       <h2>Jackets</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className='category-container'>
    //     {/* <img /> */}
    //     <div className='category-body-container'>
    //       <h2>Sneakers</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className='category-container'>
    //     {/* <img /> */}
    //     <div className='category-body-container'>
    //       <h2>Women</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    //   <div className='category-container'>
    //     {/* <img /> */}
    //     <div className='category-body-container'>
    //       <h2>Men</h2>
    //       <p>Shop Now</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
