var otherApp = angular.module('otherApp', ['ngAnimate']);

otherApp.controller('ArtistsFromDatabase', ['$scope','$http', function($scope,$http){
				
		//Start of Nature Discovery
		
		var questionNumber=1;
		
		var products= [
			/*0*/	{
				        name:"BERGAMOT ESSENTIAL OIL TRAVEL SIZE", 
					    link:"https://artnaturals.com/products/art-naturals-bermot-essential-oil-travel-size",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Bergamot.jpg?v=1484854457",
						bulletOne:"Uplifting and calming.",
						bulletTwo:"Supports release of repressed emotions."		
					},
			
			/*1*/	{
						name:"FRANKINCENSE OIL SET ", 
						link:"https://artnaturals.com/products/frankincense-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Frankincense-Oil_1000x1000_5c4cdfcb-c134-418a-93d5-2ffeed9e848b.jpg?v=1480361794",
						bulletOne:"Helps fight fatigue, and quiets and focuses the mind.",
						bulletTwo:"Enhances health and supports the immune system."
					},
			
			/*2*/	{
						name:"LEMONGRASS ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-lemongrass-essential-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Lemongrass.jpg?v=1484854485",
						bulletOne:"Offers emotional uplift and relaxation.",
						bulletTwo:"Helps reduce inflammation in joints and tendons."
					},
			
			/*3*/	{
						name:"MAGNESIUM OIL", 
						link:"https://artnaturals.com/products/art-naturals-magnesium-oil-12-oz",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Magnesium-Oil_1000x1000_18e956d9-2165-4103-a2d5-649b19ef5d75.jpg?v=1476137606",
						bulletOne:"Reduces effects of migraines, arthritis and cramps.",
						bulletTwo:"Aids in reducing the symptoms of stress and anxiety."
					},	
			
			/*4*/	{
						name:"PEPPERMINT ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-peppermint-essential-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Peppermint.jpg?v=1484854504",
						bulletOne:"Helps to reduce fatigue and uplift the mind.",
						bulletTwo:"Relieve sinus/respiratory congestion & headaches."
					},	
			
			/*5*/	{
						name:"SIGNATURE ZEN ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-signature-zen-essential-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/ZEN_1000x1000_360b0b26-e170-4cae-a810-782fae921145.jpg?v=1476137676",
						bulletOne:"Promotes restful sleep & calms stress/anxiety.",
						bulletTwo:"Balances body systems."
					},	
			
			/*6*/	{
						name:"PATCHOULI ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-patchouli-essential-oil-travel-size",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/PATCHOULI_1000x1000_4aefce08-fcb4-42fa-a8ee-45f80a49a115.jpg?v=1485290057",
						bulletOne:"Reduces stress, boosts the immune system.",
						bulletTwo:"Also an antidepressant/antispasmodic."
					},
			
			/*7*/	{
						name:"TOP 16 ESSENTIAL OILS SET", 
						link:"https://artnaturals.com/products/top-16-essential-oil-set",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Top_16.jpg?v=1484926463",
						bulletOne:"Tackle common ailments and boost mood.",
						bulletTwo:"Scent your home and office with aromatherapy."
					},
			
			/*8*/	{
						name:"GRAPEFRUIT ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-grapefruit-essential-oil-travel-size",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Grapefruit.jpg?v=1484854473",
						bulletOne:"Cleansing and uplifting.",
						bulletTwo:"Helps reduce depression and tension."
					},		
			
			/*9*/	{
						name:"ORANGE ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-sweet-orange-essential-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Sweet_Orange_travel_Size.jpg?v=1484854510",
						bulletOne:"Assist people suffering from anziety.",
						bulletTwo:"Helps circulates and unblock stagnant energy."
					},
			
			/*10*/	{	name:"LIME ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-lime-essential-oil-travel-size-1",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Lime.jpg?v=1484854493",
						bulletOne:"Promotes emotional well-being.",
						bulletTwo:"Known to assist in healing wounds."
					},	
			
			/*11*/	{
						name:"LEMON OIL SET (4 OZ. / 118ML )", 
						link:"https://artnaturals.com/products/art-naturals-lemon-oil?ref=isp_rel_no_match",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Lemon-Oil_1000x1000_f12d68f9-28e5-447f-9c19-0f7b905d1a6a.jpg?v=1479336816",
						bulletOne:"Just as cleansing as it is uplifting.",
						bulletTwo:"Aids as an excellent remover of toxins."
					},	
			
			/*12*/	{
						name:"TANGERINE ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-tangerine-essential-oil-travel-size",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Tangerine.jpg?v=1484854513",
						bulletOne:"Refreshes the senses and eases the mind.",
						bulletTwo:"Helps comfort and sooth emotional stress."
					},	
			
			/*13*/	{
						name:"PINE NEEDLE ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-pine-needle-essential-oil-travel-size",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Pine_Needle.jpg?v=1484854507",
						bulletOne:"Contributes to alertness and productivity.",
						bulletTwo:"Uplifts the mind and helps open the lungs."
					},		
			
			/*14*/	{
						name:"ACNE SERUM ( 1 OZ. / 30ML )", 
						link:"https://artnaturals.com/products/anti-acne-serum",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Art_Naturals_Anti_Acne_Serum.jpg?v=1477430257",
						bulletOne:"Helps remove Acne.",
						bulletTwo:"Clears blemishes."
					},			
			
			/*15*/	{
						name:"CLARIFYING FACE WASH", 
						link:"https://artnaturals.com/products/organic-clarifying-acne-face-wash",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Clarifying_Face_Wash.jpg?v=1487188538",
						bulletOne:"Exfoliates skin.",
						bulletTwo:"Removes oil and dirt."
					},	
			
			/*16*/	{
						name:"EUCALYPTUS OIL SET (4 OZ. / 118ML )", 
						link:"https://artnaturals.com/products/art-naturals-eucalyptus-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Eucalyptus-Oil_1000x1000_cb6190ef-55f3-4aa1-8cff-144c09ac5df1.jpg?v=1479335939",
						bulletOne:"Helps clear the mind and helps concentration.",
						bulletTwo:"Soothes exhaustion."
					},	
			
			/*17*/	{
						name:"ROSEMARY ESSENTIAL OIL TRAVEL SIZE", 
						link:"https://artnaturals.com/products/art-naturals-rosemary-essential-oil",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Rosemary.jpg?v=1484854507",
						bulletOne:"Stimulates the mind, encourages clarity and memory.",
						bulletTwo:"Energizing and uplifting."
					},
			
			/*18*/	{
						name:"ALOE VERA GEL", 
						link:"https://artnaturals.com/products/aloe-vera-gel",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Aloe-Vera-Gel_1000x1000_b7fb5036-88c3-498a-92a2-722e66629038.jpg?v=1476135957",
						bulletOne:"Soothes Burns.",
						bulletTwo:"Moisturizes."
					},
			
			/*19*/	{ 
						name:"DEMRELAX CREAM", 
						link:"https://artnaturals.com/products/demrelax-pain-relief-cream",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/DemRelax-Cream_1000x1000_46de8953-20d4-46e7-abbc-0f71475ec00e.jpg?v=1476136094",
						bulletOne:"Soothes sore mucles.",
						bulletTwo:"Soothes achy joints."
					},
			
			/*20*/	{
						name:"ANTI-CELLULITE KIT", 
						link:"https://artnaturals.com/products/cellulite-away-cream",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Cellulite-Away-Set_1000x1000_fd856ba3-f6e8-4de5-98cb-e856826ca9b4.jpg?v=1476136080",
						bulletOne:"Includes a massager.",
						bulletTwo:"Preserve lipid barrier and sculpts the skin."
					},
			
			/*21*/	{
						name:"ARABICA COFFEE SCRUB", 
						link:"https://artnaturals.com/products/art-naturals-organic-arabica-coffee-scrub-8-8-oz",
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Arabica-Coffee-Scrub_1000x1000_f7491190-b7e3-45f8-9479-dfac215d5544.jpg?v=1476135972",
						bulletOne:"Scrub off dead skin.",
						bulletTwo:"Improve age spots."
					},	
			
			/*21*/	{
						name:"BATH BOMBS SET", 
						link:"https://artnaturals.com/products/art-naturals-bath-bombs-gift-set-6-pack", 
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/AN_Bath_Bombs_1000x1000_01e7a9c2-e100-46f4-b879-203e05b28408.jpg?v=1481301334",
						bulletOne:"Lush essential oils promote relaxation.",
						bulletTwo:"Target dry skin, and soothe and heal the body."
					},		
			
			/*22*/	{
						name:"SOLEIL SPF 30 TINTED FACIAL SUNSCREEN", 
						link:"https://artnaturals.com/products/facial-sunscreen-and-tinted-moisturizer", 
						photo:"https://cdn.shopify.com/s/files/1/1413/2750/products/Soleil-SPF-30-Tinted-Facial-Sunscreen_1000x1000_7b147f60-99cb-4b3c-9099-e6eef128d35b.jpg?v=1476137708",
						bulletOne:"Protect your skin.",
						bulletTwo:"Keep your face healthy."
					}	
				]
				
		$scope.mindProducts=[ 
					{name:"Mental Fatigue", product:[products[0],products[1],products[2]]},
					{name:"Migranes", product:[products[1],products[3],products[4]]},
					{name:"Nervousness", product:[products[5],products[6],products[7]]},
					{name:"Depression", product:[products[0],products[8],products[9]]},
					{name:"Stress Relief", product:[products[1],products[3],products[8]]},
					{name:"Insomnia", product:[products[0],products[0],products[0]]},
					{name:"Anger", product:[products[0],products[0],products[0]]},
					//{name:"Creative Inspiration", product:[products[0],products[0],products[0]]},
					//{name:"Clarity", product:[products[0],products[0],products[0]]},
					//{name:"Calming", product:[products[0],products[0],products[0]]}
				];
				
		$scope.bodyProducts=[
					{name:"Rashes", product:[products[10],products[10],products[10]]},
					{name:"Fever", product:[products[11],products[2],products[2]]},
					{name:"Indigestion",product:[products[12],products[12],products[12]]},
					{name:"Acne", product:[products[12],products[14],products[15]]},
					{name:"Respiratory", product:[products[16],products[0],products[7]]},
					{name:"Arthritis", product:[products[3],products[17],products[15]]},
					{name:"Asthma", product:[products[1],products[1],products[7]]},
					{name:"Scars", product:[products[1],products[15],products[18]]},
					{name:"Muscle Fatigue", product:[products[19],products[3],products[4]]},
					{name:"Cellulite", product:[products[20],products[21],products[13]]},
					{name:"Detox", product:[products[21],products[21],products[21]]},
					{name:"Sunburn", product:[products[0],products[22],products[22]]},
					{name:"Burns", product:[products[16],products[1],products[18]]},
					{name:"Insect Bites",product:[products[18],products[10],products[2]]},
					{name:"Constipation", product:[products[13],products[13],products[13]]},
					{name:"Nausea", product:[products[7],products[7],products[7]]},
					{name:"Menstraul", product:[products[4],products[1],products[7]]},
					{name:"Flu/Cough", product:[products[1],products[21],products[7]]},
					{name:"Muscle Aches", product:[products[19],products[3],products[4]]},
					/*{name:"Aging Skin", product:[products[19],products[3],products[4]]},
					{name:"Antiallergenic", product:[products[19],products[3],products[4]]},
					{name:"Antibacterial", product:[products[19],products[3],products[4]]},
					{name:"Antibiotic", product:[products[19],products[3],products[4]]},
					{name:"Antifungal", product:[products[19],products[3],products[4]]},
					{name:"Antimicrobial", product:[products[19],products[3],products[4]]},
					{name:"Antiseptic", product:[products[19],products[3],products[4]]},
					{name:"Asthma", product:[products[19],products[3],products[4]]},
					{name:"Anxiety", product:[products[19],products[3],products[4]]},
					{name:"Astringent", product:[products[19],products[3],products[4]]},
					{name:"Antiviral", product:[products[19],products[3],products[4]]},
					{name:"Acne", product:[products[19],products[3],products[4]]},
					{name:"Abscess", product:[products[19],products[3],products[4]]},
					{name:"Analgesic", product:[products[19],products[3],products[4]]},
					{name:"Aphrodisiac", product:[products[19],products[3],products[4]]},
					{name:"Arthritis", product:[products[19],products[3],products[4]]},
					{name:"Anti-inflamatory", product:[products[19],products[3],products[4]]},
					{name:"Bed Sore", product:[products[19],products[3],products[4]]},
					{name:"Boil", product:[products[19],products[3],products[4]]},
					{name:"Burn", product:[products[19],products[3],products[4]]},
					{name:"Bactericidal", product:[products[19],products[3],products[4]]},
					{name:"Bruise", product:[products[19],products[3], products[4]]},
					{name:"Bronchitis", product:[products[19],products[3],products[4]]},
					{name:"Carbuncles", product:[products[19],products[3],products[4]]},
					{name:"Cellulite", product:[products[19],products[3],products[4]]},
					{name:"Candida", product:[products[19],products[3],products[4]]},
					{name:"Child Birth Support", product:[products[19],products[3],products[4]]},
					{name:"Cold Sore", product:[products[0],products[0],products[0]]},
					{name:"Cystitis", product:[products[0],products[0],products[0]]},
					{name:"Cough", product:[products[0],products[0],products[0]]},
					{name:"Circulartory Health", product:[products[0],products[0],products[0]]},
					{name:"Constipation", product:[products[0],products[0],products[0]]},
					{name:"Cold", product:[products[0],products[0],products[0]]},
					{name:"Colic", product:[products[0],products[0],products[0]]},
					{name:"Chicken Pox", product:[products[0],products[0],products[0]]},
					{name:"Cramping", product:[products[0],products[0],products[0]]},
					{name:"Chillblains", product:[products[0],products[0],products[0]]},
					{name:"Dermatitis", product:[products[0],products[0],products[0]]},
					{name:"Diuretic", product:[products[0],products[0],products[0]]},
					{name:"Disinfectant", product:[products[0],products[0],products[0]]},
					{name:"Digestive Ailments", product:[products[0],products[0],products[0]]},					
					{name:"Decongestant", product:[products[0],products[0],products[0]]},
					{name:"Diarrhea", product:[products[0],products[0],products[0]]} */
					
					
					
					
					
					
					
					
					
					
					
					
				];	
				
		$scope.switchToQuestionTwo=function(y){
				
				if(y==='mind')
				{
					$scope.customerConcern=$scope.mindProducts;
					
				}
				else if(y==='body')
				{
					$scope.customerConcern=$scope.bodyProducts;
				}
				
				console.log($scope.customerConcern);
				questionNumber=2;
		};
		
		$scope.switchToQuestionThree=function(x){
				questionNumber=3;
				console.log(x);
				$scope.productNumber=x;
				
		};
				
		$scope.back=function(){
			
				questionNumber=questionNumber-1;
			
		}
		
		
		$scope.checkQuestionNumber=function(x){
			if(x==questionNumber)
			{
				return true;
			}
			return false
		};
		
	
		
		
}]);







	