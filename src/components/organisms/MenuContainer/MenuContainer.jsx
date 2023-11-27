import MenuCard from '../../molecules/MenuCard/MenuCard';
import './MenuContainer.scss';

const MenuContainer = () => {
	return (
		<div className='menu'>
			<div className='menu__container'>
				<h2 className='menu__title'>Menu</h2>
				<div className='menu__cardContainer'>
					<MenuCard
						altImg={'gyoza'}
						foodName={'Set Gyozas (4/pz)'}
						foodPrice={'$3.99'}
						foodInfo={`Delight yourself with our Gyozas set that includes: Steamed pork with soy sauce, 
              Grilled chicken with sesame sauce, 
              Stirfried vegetables with ginger & 
              Shrimp with spicy sauce`}
					/>
					<MenuCard
						altImg={'sashimi'}
						foodName={`Salmon & Tuna 
              Sashimi (8/pz)`}
						foodPrice={'$3.99'}
						foodInfo={`Combination of thin slices of salmon and fresh tuna, served with wasabi and pickled ginger.`}
					/>
					<MenuCard
						altImg={'tempura'}
						foodName={`Seafood and Vegetables Tempura`}
						foodPrice={'$2.99'}
						foodInfo={`Mixed tempura of shrimp, squid and fresh vegetables, with tempura sauce.`}
					/>
					<MenuCard
						altImg={'sushi'}
						foodName={`Uramaki Rainbow Roll`}
						foodPrice={'$2.99'}
						foodInfo={`Rice roll with avocado, cucumber, soft shell crab, salmon, tuna and avocado, topped with a variety of sashimi.`}
					/>
					<MenuCard
						altImg={'edamame'}
						foodName={`Steamed Edamame`}
						foodPrice={'$1.99'}
						foodInfo={`Steamed soybean pods with sea salt flakes.`}
					/>
					<MenuCard
						altImg={'ramen'}
						foodName={`Ramen Tonkotsu `}
						foodPrice={'$6.99'}
						foodInfo={`Ramen noodles in thick tonkotsu broth, with shredded pork, marinated egg, scallion and nori seaweed. `}
					/>
					<MenuCard
						altImg={'teriyaki'}
						foodName={`Teriyaki Chicken Donburi with Rice`}
						foodPrice={'$7.99'}
						foodInfo={`Rice bowl topped with teriyaki chicken, sautéed vegetables and poached egg`}
					/>
					<MenuCard
						altImg={'dorayaki'}
						foodName={`Dorayaki with Red Bean (3/pz)`}
						foodPrice={'$4.99'}
						foodInfo={`Fluffy pancake-like pastries filled with anko (sweet red bean paste), served with a scoop of vanilla ice cream and decorated with maple syrup.`}
					/>
					<MenuCard
						altImg={'mochi'}
						foodName={`Taro Mochi with Coconut Filling (5/pz)`}
						foodPrice={'$3.99'}
						foodInfo={`Taste the authentic texture and flavor of Japan with our Taro Mochi. Its soft and sticky exterior envelops a creamy coconut filling, creating an exquisite combination of sweetness and softness.`}
					/>
				</div>
			</div>
		</div>
	);
};

export default MenuContainer;
