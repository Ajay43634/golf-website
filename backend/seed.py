from database import SessionLocal
from models import Product


def seed():
    db = SessionLocal()
    try:
        if db.query(Product).count() > 0:
            print("Database already seeded. Skipping.")
            return

        products = [
            # --- CLUBS ---
            Product(
                name="TaylorMade QI4D Fairway Wood",
                category="clubs",
                price=299.99,
                description="The QI4D Fairway is engineered with a deeper face and lower CG for maximum launch and distance from the fairway.",
                image_url="https://placehold.co/400x400?text=QI4D+Fairway",
                stock=25,
                is_featured=True,
                attributes={
                    "hand": ["Right", "Left"],
                    "loft": ["15°", "18°", "21°"],
                    "flex": ["Regular", "Stiff", "X-Stiff"],
                    "shaft_material": ["Graphite"],
                    "shaft_model": ["Fujikura Speeder NX"],
                },
            ),
            Product(
                name="Ping G440 Hybrid",
                category="clubs",
                price=279.99,
                description="The G440 Hybrid delivers easy launch, high MOI, and versatility from any lie on the course.",
                image_url="https://placehold.co/400x400?text=G440+Hybrid",
                stock=18,
                is_featured=False,
                attributes={
                    "hand": ["Right", "Left"],
                    "loft": ["17°", "20°", "23°", "26°"],
                    "flex": ["Regular", "Stiff", "Senior"],
                    "shaft_material": ["Graphite"],
                    "shaft_model": ["PING ALTA CB 70 Slate"],
                },
            ),
            Product(
                name="TaylorMade P790 Irons",
                category="clubs",
                price=1299.99,
                description="P790 combines forged construction with SpeedFoam Air technology for unmatched feel and ball speed.",
                image_url="https://placehold.co/400x400?text=P790+Irons",
                stock=12,
                is_featured=True,
                attributes={
                    "hand": ["Right", "Left"],
                    "loft": ["4-PW", "5-PW", "5-PW+AW"],
                    "flex": ["Regular", "Stiff", "X-Stiff"],
                    "shaft_material": ["Steel", "Graphite"],
                    "shaft_model": ["Dynamic Gold 105", "KBS Tour 90"],
                },
            ),
            Product(
                name="Titleist GT4 Driver",
                category="clubs",
                price=599.99,
                description="The GT4 Driver is designed for low spin, maximum workability, and tour-level performance.",
                image_url="https://placehold.co/400x400?text=GT4+Driver",
                stock=20,
                is_featured=True,
                attributes={
                    "hand": ["Right", "Left"],
                    "loft": ["8°", "9°", "10°", "10.5°"],
                    "flex": ["Regular", "Stiff", "X-Stiff", "Senior"],
                    "shaft_material": ["Graphite"],
                    "shaft_model": ["HZRDUS Black 4G 60", "HZRDUS Red CB 60"],
                },
            ),

            # --- BALLS ---
            Product(
                name="Titleist Pro V1",
                category="balls",
                price=54.99,
                description="The #1 ball in golf. Pro V1 delivers total performance with exceptional distance, consistent flight, and soft feel.",
                image_url="https://placehold.co/400x400?text=Pro+V1",
                stock=100,
                is_featured=True,
                attributes={
                    "color": ["White", "Yellow"],
                    "quantity": ["Dozen (12)", "3-Pack"],
                },
            ),
            Product(
                name="Callaway Supersoft",
                category="balls",
                price=29.99,
                description="Ultra-low compression core for incredibly soft feel and high launch with low spin for more distance.",
                image_url="https://placehold.co/400x400?text=Supersoft",
                stock=80,
                is_featured=False,
                attributes={
                    "color": ["White", "Yellow", "Pink", "Orange"],
                    "quantity": ["Dozen (12)", "3-Pack"],
                },
            ),
            Product(
                name="Bridgestone e6 Soft",
                category="balls",
                price=34.99,
                description="Delta Dimple technology reduces drag for a straighter ball flight and exceptional distance.",
                image_url="https://placehold.co/400x400?text=e6+Soft",
                stock=60,
                is_featured=False,
                attributes={
                    "color": ["White", "Yellow"],
                    "quantity": ["Dozen (12)"],
                },
            ),
            Product(
                name="Srixon Soft Feel",
                category="balls",
                price=27.99,
                description="338 Speed Dimple Pattern lowers drag and increases lift for longer, more consistent distance.",
                image_url="https://placehold.co/400x400?text=Soft+Feel",
                stock=75,
                is_featured=False,
                attributes={
                    "color": ["White", "Yellow"],
                    "quantity": ["Dozen (12)", "3-Pack"],
                },
            ),

            # --- APPAREL ---
            Product(
                name="Nike Dri-FIT Par 5 Polo",
                category="apparel",
                price=65.00,
                description="Sweat-wicking Dri-FIT fabric keeps you cool and dry on the course. Classic polo design with a modern fit.",
                image_url="https://placehold.co/400x400?text=Par+5+Polo",
                stock=40,
                is_featured=False,
                attributes={
                    "color": ["White", "Black", "Navy", "Grey"],
                    "size": ["XS", "S", "M", "L", "XL", "XXL"],
                    "quantity": ["1"],
                },
            ),
            Product(
                name="Nike Velocity Stripe Polo",
                category="apparel",
                price=70.00,
                description="Engineered with ventilation zones and Dri-FIT technology for all-day comfort during your round.",
                image_url="https://placehold.co/400x400?text=Velocity+Polo",
                stock=35,
                is_featured=False,
                attributes={
                    "color": ["White/Blue", "Black/Red", "Grey/Green"],
                    "size": ["S", "M", "L", "XL", "XXL"],
                    "quantity": ["1"],
                },
            ),
            Product(
                name="TravisMathew Sun Society Cap",
                category="apparel",
                price=34.99,
                description="Moisture-wicking, UPF 30+ protection cap with a structured front panel and adjustable closure.",
                image_url="https://placehold.co/400x400?text=Sun+Society+Cap",
                stock=50,
                is_featured=False,
                attributes={
                    "color": ["White", "Black", "Navy", "Heather Grey"],
                    "size": ["One Size"],
                    "quantity": ["1"],
                },
            ),

            # --- ACCESSORIES ---
            Product(
                name="FootJoy WeatherSof Golf Glove Two Pack",
                category="accessories",
                price=29.99,
                description="All-weather performance with a soft, cabretta leather palm patch. Includes two gloves for great value.",
                image_url="https://placehold.co/400x400?text=WeatherSof+Glove",
                stock=60,
                is_featured=True,
                attributes={
                    "color": ["White", "Black"],
                    "glove_size": ["S", "M", "M/L", "L", "XL", "XXL"],
                    "quantity": ["2-Pack"],
                },
            ),
        ]

        db.add_all(products)
        db.commit()
        print(f"Seeded {len(products)} products successfully.")

    except Exception as e:
        db.rollback()
        print(f"Seed failed: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    seed()
