Add a new product to the FairwayPro database via the API.

Ask the user for the following details:
1. Name
2. Category (clubs | balls | apparel | accessories)
3. Price
4. Description
5. Stock quantity
6. Image URL (optional)
7. Variant attributes based on category:
   - Clubs: hand, flex, shaft_material, shaft_model, club_number
   - Balls: color, quantity
   - Apparel: color, size, quantity
   - Accessories: color, glove_size, quantity

Then POST to /api/products with the collected data. Show the created product response to the user.
