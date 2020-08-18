import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="mainImage"
      />
      <br />

      <h1>Books</h1>
      <div className="home-row">
        <Product
          id="1"
          title="Harry Potter and the Cursed child"
          price={11.96}
          rating={5}
          image="https://4.imimg.com/data4/TT/TT/GLADMIN-/img-book-1341200-57-3c-9780751565355-jpg-png-0930db573c-999x200x250-250x250.png"
        />
        <Product
          id="2"
          title="Murder on the Orient Express"
          price={8.89}
          rating={5}
          image="https://info.harpercollins.com/wp-content/uploads/2017/10/book-cover.png"
        />
        <Product
          id="3"
          title="The subtle art of not giving a FUCK"
          price={9.1}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/413R2vCAcLL.jpg"
        />
        <Product
          id="4"
          title="Everything is FUCKED"
          price={15.0}
          rating={4}
          image="https://markmanson.net/wp-content/uploads/2019/02/eif-3d-fits-shadow.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="5"
          title="The girl with the dragon tattoo"
          price={13.11}
          rating={3}
          image="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/85918/2012/07/100777-98192.jpg?itok=mX_RykX4"
        />
        <Product
          id="6"
          title="Harry Potter and the chamber of secrets"
          price={16.28}
          rating={5}
          image="https://hpmedia.bloomsbury.com/rep/s/9781408845653_309900.png"
        />
      </div>
      <br />
      <br />
      <h1>Electronics</h1>
      <div className="home-row">
        <Product
          id="7"
          title="Samsung Galaxy S20"
          price={999.0}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/in-galaxy-s20-plus-sm-g985-sm-g985fzpdinu-frontbpurple-thumb-261486036"
        />
        <Product
          id="8"
          title="IPhone 11 Pro 256 GB"
          price={1500.0}
          rating={4}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566953859132"
        />
        <Product
          id="9"
          title="Motorola Razr"
          price={799.99}
          rating={3}
          image="https://www.gizmochina.com/wp-content/uploads/2019/03/motorola-razr-2019-1-500x500.jpg"
        />
        <Product
          id="10"
          title="iPad Pro 256 GB"
          price={999.0}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156"
        />
      </div>
      <br />
      <br />
      <h1>Clothes</h1>
      <div className="home-row">
        <Product
          id="11"
          title="Turtleneck Tshirt"
          price={399}
          rating={5}
          image="https://www.orvis.com/secure_assets/prodimg/7A7C6PB.jpg"
        />
        <Product
          id="12"
          title="Trenchcoat for men"
          price={2499}
          rating={4}
          image="https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/425416/item/goods_69_425416.jpg?width=734"
        />
        <Product
          id="13"
          title="Zara printed tshirt"
          price={299}
          rating={4}
          image="https://static.zara.net/photos///2020/I/0/2/p/2599/310/627/2/w/673/2599310627_1_1_1.jpg?ts=1593097060944"
        />
        <Product
          id="14"
          title="Nike Brooklyn Nets Courtside"
          price={649}
          rating={5}
          image="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/c6065dfb-b431-4728-885d-c6e225c58408/brooklyn-nets-courtside-nba-pullover-hoodie-N7lVlS.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="15"
          title="Adidas originals Franz Beckenbauer Track Pants"
          price={649}
          rating={3}
          image="https://www.dressinn.com/f/13671/136716425/adidas-originals-franz-beckenbauer-track-pants.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
